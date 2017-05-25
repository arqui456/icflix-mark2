import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';
import { Http } from '@angular/http';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

import { FilmeService } from './services/filme.service';
import { ToastComponent } from './shared/toast/toast.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(public auth: AuthService,
  private filmeService: FilmeService,
  private formBuilder: FormBuilder,
  private http: Http,
  public toast: ToastComponent) { }

   	filme = {};
   	aux = {};
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

  enableEditing(filme) {
    this.isEditing = true;
    this.aux = filme;
  }





}
