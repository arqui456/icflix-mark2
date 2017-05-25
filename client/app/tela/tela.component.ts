import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

import { FilmeService } from '../services/filme.service';
import { ToastComponent } from '../shared/toast/toast.component';

@Component({
  selector: 'app-tela',
  templateUrl: './tela.component.html',
  styleUrls: ['./tela.component.scss']
})
export class TelaComponent implements OnInit {
	filme = {};
  	filmes = [];
  	isLoading = true;


  	addFilmeForm: FormGroup;
  	title = new FormControl('', Validators.required);
  	categoria = new FormControl('', Validators.required);
 	  avaliacao = new FormControl('', Validators.required);
  	cena1 = new FormControl('', Validators.required);
 	  cena2 = new FormControl('', Validators.required);
 	  cena3 = new FormControl('', Validators.required);
 	  descricao = new FormControl('', Validators.required);
  	trailer = new FormControl('', Validators.required);

  constructor(
  	private filmeService: FilmeService,
    private formBuilder: FormBuilder, 
    private http: Http,
    public toast: ToastComponent
  ) { }

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
      trailer: this.trailer
    });
  }

  getFilmes() {
    this.filmeService.getFilmes().subscribe(
      data => this.filmes = data,
      error => console.log(error),
      () => this.isLoading = false
    );
  }


}
