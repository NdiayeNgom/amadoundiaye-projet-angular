import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Program } from 'src/app/program';
import { ProgramService } from 'src/app/services/program.service';

@Component({
  selector: 'app-program-form',
  templateUrl: './program-form.component.html',
  styleUrls: ['./program-form.component.scss']
})

export class ProgramFormComponent implements OnInit {
  programForm!: FormGroup ;

  constructor(private fb: FormBuilder, private program: ProgramService) { }

  ngOnInit() {
      this.programForm = this.fb.group({
        name: ['', Validators.required],
        domainNames: ['', Validators.required],
        description: ['', Validators.required],
        startDate: ['', Validators.required],
        endDate: ['', Validators.required],
        coachId: ['', Validators.required],
       
      });
  }

  createProgram(){
    const unProgram = this.programForm.value as Program;
    unProgram.domainNames = this.programForm.value.domainNames.split(',');
    unProgram.startDate = '27/04/2023';
    unProgram.endDate = '27/04/2023';
    this.program.create(unProgram).subscribe(
      (res) => { console.log(res); },
      (error) => { console.error(error); }
    );
    //this.auth.register
    console.log(this.programForm.value);
  }

}
