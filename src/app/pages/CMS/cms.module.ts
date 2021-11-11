import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LoginCMSComponent } from './login-cms/login-cms.component';
import { ListEncuestasComponent } from './list-encuestas/list-encuestas.component';
import { EditEncuestasComponent } from './edit-encuestas/edit-encuestas.component';



@NgModule({
  declarations: [
    LoginCMSComponent,
    ListEncuestasComponent,
    EditEncuestasComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class CMSModule { }
