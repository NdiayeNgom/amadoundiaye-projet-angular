import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListProgramComponent } from './list-program/list-program.component';
import { ProgramFormComponent } from './program-form/program-form.component';

const routes: Routes = [
  { path: 'list', component: ListProgramComponent },
  { path: 'create', component: ProgramFormComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProgramsRoutingModule { }
