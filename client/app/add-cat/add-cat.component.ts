import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

import { FilmeService } from '../services/filme.service';
import { ToastComponent } from '../shared/toast/toast.component';

@Component({
  selector: 'app-add-cat',
  templateUrl: './add-cat.component.html',
  styleUrls: ['./add-cat.component.scss']
})
export class AddCatComponent implements OnInit {
	
  constructor(
              private formBuilder: FormBuilder,
              private http: Http,
              public toast: ToastComponent,
              private filmeService: FilmeService
            ) { }

  ngOnInit() {
    
    
  }

}
