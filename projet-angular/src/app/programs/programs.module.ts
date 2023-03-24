import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProgramsRoutingModule } from './programs-routing.module';
import { ListProgramComponent } from './list-program/list-program.component';


@NgModule({
  declarations: [
    ListProgramComponent
  ],
  imports: [
    CommonModule,
    ProgramsRoutingModule
  ]
})
export class ProgramsModule { }
