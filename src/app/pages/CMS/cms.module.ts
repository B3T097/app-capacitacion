import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LoginCMSComponent } from './login-cms/login-cms.component';



@NgModule({
  declarations: [
    LoginCMSComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class CMSModule { }
