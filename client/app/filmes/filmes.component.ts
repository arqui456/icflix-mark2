import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

import { FilmeService } from '../services/filme.service';
import { ToastComponent } from '../shared/toast/toast.component';

@Component({
  selector: 'app-filmes',
  templateUrl: './filmes.component.html',
  styleUrls: ['./filmes.component.scss']
})
export class FilmesComponent implements OnInit {

  filme = {};
  filmes = [];
  isLoading = true;
  isEditing = false;

  addFilmeForm: FormGroup;
  title = new FormControl('', Validators.required);
  categoria = new FormControl('', Validators.required);
  avaliacao = new FormControl('', Validators.required);
  cena1 = new FormControl('', Validators.required);
  cena2 = new FormControl('', Validators.required);
  cena3 = new FormControl('', Validators.required);
  descricao = new FormControl('', Validators.required);
  trailer = new FormControl('', Validators.required);
  thumbnail = new FormControl('', Validators.required);
 

  constructor(private filmeService: FilmeService,
              private formBuilder: FormBuilder,
              private http: Http,
              public toast: ToastComponent) { }

  ngOnInit() {
    this.getFilmes();
    this.addFilmeForm = this.formBuilder.group({
      title: this.title,
      categoria: this.categoria,
      avaliacao: this.avaliacao,
      cena1: this.cena1,
      cena2: this.cena2,
      cena3: this.cena3,
      descricao: this.descricao,
      trailer: this.trailer,
      thumbnail: this.thumbnail
    });
  }

  getFilmes() {
    this.filmeService.getFilmes().subscribe(
      data => this.filmes = data,
      error => console.log(error),
      () => this.isLoading = false
    );
  }

  addFilme() {
    this.filmeService.addFilme(this.addFilmeForm.value).subscribe(
      res => {
        const newFilme = res.json();
        this.filmes.push(newFilme);
        this.addFilmeForm.reset();
        this.toast.setMessage('item added successfully.', 'success');
      },
      error => console.log(error)
    );
  }

  enableEditing(filme) {
    this.isEditing = true;
    this.filme = filme;
  }

  cancelEditing() {
    this.isEditing = false;
    this.filme = {};
    this.toast.setMessage('item editing cancelled.', 'warning');
    // reload the filmes to reset the editing
    this.getFilmes();
  }

  editFilme(filme) {
    this.filmeService.editFilme(filme).subscribe(
      res => {
        this.isEditing = false;
        this.filme = filme;
        this.toast.setMessage('item edited successfully.', 'success');
      },
      error => console.log(error)
    );
  }

  deleteFilme(filme) {
    if (window.confirm('Are you sure you want to permanently delete this item?')) {
      this.filmeService.deleteFilme(filme).subscribe(
        res => {
          const pos = this.filmes.map(elem => { return elem._id; }).indexOf(filme._id);
          this.filmes.splice(pos, 1);
          this.toast.setMessage('item deleted successfully.', 'success');
        },
        error => console.log(error)
      );
    }
  }

}
