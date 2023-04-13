import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { FormArray } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
//import * as moment from "moment";
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
      (res:any) => { 
        const helper = new JwtHelperService();
        const decodedToken = helper.decodeToken(res.accessToken);

        console.log(decodedToken); 
        localStorage.setItem('id_token', res.accessToken);
        localStorage.setItem('user_info', JSON.stringify(decodedToken));
        //localStorage.setItem("expires_at", JSON.stringify(expiresAt.valueOf()) );

        //this.route.navigate(['/programs']);
      },
      (error) => { console.error(error); }
    );
    console.log(this.loginForm.value);
  }

  logout() {
    localStorage.removeItem("id_token");
    localStorage.removeItem("expires_at");
  }
}
