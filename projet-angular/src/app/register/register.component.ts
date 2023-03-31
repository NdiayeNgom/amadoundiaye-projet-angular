import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { User } from '../user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss', ]
})

export class RegisterComponent implements OnInit{
  registerForm!: FormGroup ;

  constructor(private fb: FormBuilder, private auth: AuthService) { }

  ngOnInit() {
      this.registerForm = this.fb.group({
        firstName: ['', Validators.required],
        lastName: ['', Validators.required],
        email: ['', Validators.required],
        phoneNumber: ['', Validators.required],
        password: ['', Validators.required],
        role: ['STUDENT', Validators.required],
        /* address: this.fb.group({
          street: [''],
          city: [''],
          state: [''],
          zip: ['']
        }),
        aliases: this.fb.array([
          this.fb.control('')
        ]) */
      });
  } 
  signUp(){
    const user = this.registerForm.value as User;
    this.auth.register(user).subscribe(
      (res) => { console.log(res); },
      (error) => { console.error(error); }
    );
    //this.auth.register
    console.log(this.registerForm.value);
  }
}
