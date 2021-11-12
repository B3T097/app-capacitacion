import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginCMSComponent } from './login-cms/login-cms.component';
import { ListEncuestasComponent } from './list-encuestas/list-encuestas.component';
import { EditEncuestasComponent } from './edit-encuestas/edit-encuestas.component';
import { MenuLateralComponent } from './componentes/menu-lateral/menu-lateral.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { UserEditComponent } from './user-edit/user-edit.component';
import { HeaderComponent } from './componentes/header/header.component';
import {RouterModule} from '@angular/router';
import { FormsModule } from '@angular/forms';

import { CKEditorModule } from 'ckeditor4-angular';
import { EditPreguntasComponent } from './edit-preguntas/edit-preguntas.component';
import { EditRespuestasComponent } from './edit-respuestas/edit-respuestas.component';

@NgModule({
  declarations: [
    MenuLateralComponent,
    HeaderComponent,
    LoginCMSComponent,
    UsuariosComponent,
    UserEditComponent,
    ListEncuestasComponent,
    EditEncuestasComponent,
    EditPreguntasComponent,
    EditRespuestasComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    CKEditorModule
  ]
})
export class CMSModule { }
