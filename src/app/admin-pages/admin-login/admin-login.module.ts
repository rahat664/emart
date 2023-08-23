import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {AdminLoginRoutingModule} from './admin-login-routing.module';
import {AdminLoginComponent} from "./admin-login.component";
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    AdminLoginComponent
  ],
  imports: [
    CommonModule,
    AdminLoginRoutingModule,
    ReactiveFormsModule,
  ]
})
export class AdminLoginModule {
}
