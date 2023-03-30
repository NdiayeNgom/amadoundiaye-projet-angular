import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { FormArray } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit{
  loginForm!: FormGroup ;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
      this.loginForm = this.fb.group({
        email: ['', Validators.required],
        password: ['', Validators.required],
        
      });
  } 

  login(){
    console.log(this.loginForm.value);
  }
  
}
