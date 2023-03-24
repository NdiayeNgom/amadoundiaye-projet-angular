import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HelloComponent } from './hello/hello.component';
import { RegisterComponent } from './register/register.component'; 
import { ProgramsModule } from './programs/programs.module';

const routes: Routes = [
  { path: 'hello', component: HelloComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'programs', loadChildren: () => import('./programs/programs.module').then(m => m.ProgramsModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }