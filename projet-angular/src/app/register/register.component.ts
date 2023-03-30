import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { FormArray } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss', ]
})

export class RegisterComponent implements OnInit{
  registerForm!: FormGroup ;

  constructor(private fb: FormBuilder) { }

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
    console.log(this.registerForm.value);
  }
}
