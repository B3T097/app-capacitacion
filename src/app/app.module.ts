import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from '@angular/forms';

import { CMSModule } from './pages/CMS/cms.module';

import { AppComponent } from './app.component';
import { CuestionarioComponent } from './pages/users/cuestionario/cuestionario.component';
import { LoginComponent } from './pages/users/login/login.component';
import { LeccionesComponent } from './pages/users/lecciones/lecciones.component';
import { LeccionComponent } from './pages/users/leccion/leccion.component';
import { ResultadosComponent } from './pages/users/resultados/resultados.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LeccionesComponent,
    LeccionComponent,
    CuestionarioComponent,
    ResultadosComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    CMSModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
