import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListProgramComponent } from './list-program/list-program.component';

const routes: Routes = [
  { path: 'list', component: ListProgramComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProgramsRoutingModule { }
