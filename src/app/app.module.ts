import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CuestionarioComponent } from './pages/users/cuestionario/cuestionario.component';
import { LoginComponent } from './pages/users/login/login.component';
import { LeccionesComponent } from './pages/users/lecciones/lecciones.component';
import { LeccionComponent } from './pages/users/leccion/leccion.component';
import { ResultadosComponent } from './pages/users/resultados/resultados.component';
import { MenuLateralComponent } from './pages/CMS/componentes/menu-lateral/menu-lateral.component';
import { HeaderComponent } from './pages/CMS/componentes/header/header.component';
import { UsuariosComponent } from './pages/CMS/usuarios/usuarios.component';
import { LoginCMSComponent } from './pages/CMS/login-cms/login-cms.component';
import { ComponentesModule } from './pages/CMS/componentes/componentes.module';

@NgModule({
  declarations: [
    AppComponent,
    CuestionarioComponent,
    LoginComponent,
    LeccionesComponent,
    LeccionComponent,
    ResultadosComponent,
    MenuLateralComponent,
    HeaderComponent,
    UsuariosComponent,
    LoginCMSComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ComponentesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
