import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { FormArray } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit{
  loginForm!: FormGroup ;

  constructor(private fb: FormBuilder, private auth: AuthService, private route: Router) { }

  ngOnInit() {
      this.loginForm = this.fb.group({
        email: ['', Validators.required],
        password: ['', Validators.required],
        
      });
  } 
  login(){

     this.auth.login(this.loginForm.value.email, this.loginForm.value.password).subscribe(
      (res) => { 
        console.log(res); 
        this.route.navigate(['/programs']);
      },
      (error) => { console.error(error); }
    );
    console.log(this.loginForm.value);
  }
  
}
