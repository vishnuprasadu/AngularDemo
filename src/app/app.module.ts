import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponentComponent } from './home-component/home-component.component';
import { RegisterFormComponent } from './register-form/register-form.component';
import { LoginFormComponent } from './login-form/login-form.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomerDataComponent } from './customer-data/customer-data.component';
import { IndexComponentComponent } from './index-component/index-component.component';
import { HttpClientModule } from '@angular/common/http';
import { ModalModule } from 'ngx-bootstrap/modal';
import { EditRegisterFormComponent } from './edit-register-form/edit-register-form.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { EmpLoginComponent } from './emp-login/emp-login.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponentComponent,
    RegisterFormComponent,
    LoginFormComponent,
    CustomerDataComponent,
    IndexComponentComponent,
    EditRegisterFormComponent,
    EmpLoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    ModalModule.forRoot(),
    NgxPaginationModule,
    Ng2SearchPipeModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
