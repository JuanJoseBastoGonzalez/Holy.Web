import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
//import { AuthRoutingModule } from './auth-routing.module'; // Importa las rutas
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialDesignModule } from '../../shared/material-design/material-design.module';
import { SharedModule } from '../../shared/shared.module';
import { AppRoutingModule } from './auth-routing.module';
@NgModule({
  declarations: [
    LoginComponent, // Declaras los componentes
    RegisterComponent
  ],
 /* imports: [
  //  CommonModule,
   // AuthRoutingModule, // Importas el módulo de rutas
   // FormsModule,
   // ReactiveFormsModule
  ]*/
  imports: [
    CommonModule,
    AppRoutingModule,
    SharedModule,
    MaterialDesignModule,FormsModule,ReactiveFormsModule
  ]
})
export class AuthModule {}
