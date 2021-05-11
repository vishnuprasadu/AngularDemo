import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerDataComponent } from './customer-data/customer-data.component';
import { EditRegisterFormComponent } from './edit-register-form/edit-register-form.component';
import { EmpLoginComponent } from './emp-login/emp-login.component';
import { HomeComponentComponent } from './home-component/home-component.component';
import { IndexComponentComponent } from './index-component/index-component.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { RegisterFormComponent } from './register-form/register-form.component';

const routes: Routes = [
  { path: '', component: IndexComponentComponent },
  { path: 'index', component: IndexComponentComponent },
  { path: 'home', component: HomeComponentComponent },
  { path: 'register', component: RegisterFormComponent },
  { path: 'login', component: LoginFormComponent },
  { path: 'customer/:id', component: CustomerDataComponent },
  { path: 'editregister/:id', component: EditRegisterFormComponent },
  { path: 'emplogin', component: EmpLoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
