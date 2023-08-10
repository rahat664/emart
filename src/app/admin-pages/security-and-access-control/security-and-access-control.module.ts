import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SecurityAndAccessControlRoutingModule } from './security-and-access-control-routing.module';
import { SecurityAndAccessControlComponent } from './security-and-access-control.component';


@NgModule({
  declarations: [
    SecurityAndAccessControlComponent
  ],
  imports: [
    CommonModule,
    SecurityAndAccessControlRoutingModule
  ]
})
export class SecurityAndAccessControlModule { }
