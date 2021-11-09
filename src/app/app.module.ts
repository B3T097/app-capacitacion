import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CuestionarioComponent } from './pages/users/cuestionario/cuestionario.component';
import { LoginComponent } from './pages/users/login/login.component';
import { LeccionesComponent } from './pages/users/lecciones/lecciones.component';
import { LeccionComponent } from './pages/users/leccion/leccion.component';
import { ResultadosComponent } from './pages/users/resultados/resultados.component';
import { UsuariosComponent } from './pages/CMS/usuarios/usuarios.component';
import { ComponentesModule } from './pages/CMS/componentes/componentes.module';
import { UserEditComponent } from './pages/CMS/user-edit/user-edit.component';
import { CMSModule } from './pages/CMS/cms.module';

@NgModule({
  declarations: [
    AppComponent,
    CuestionarioComponent,
    LoginComponent,
    LeccionesComponent,
    LeccionComponent,
    ResultadosComponent,
    UsuariosComponent,
    UserEditComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    ComponentesModule,
    CMSModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
