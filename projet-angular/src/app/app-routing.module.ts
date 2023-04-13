import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HelloComponent } from './hello/hello.component';
import { RegisterComponent } from './register/register.component'; 
import { ProgramsModule } from './programs/programs.module';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: 'hello', component: HelloComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'programs', loadChildren: () => import('./programs/programs.module').then(m => m.ProgramsModule)},
  { path: '', redirectTo: 'login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }