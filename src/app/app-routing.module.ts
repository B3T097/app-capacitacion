import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginCMSComponent } from './pages/CMS/login-cms/login-cms.component';
import { UsuariosComponent } from './pages/CMS/usuarios/usuarios.component';
import { CuestionarioComponent } from './pages/users/cuestionario/cuestionario.component';
import { LeccionComponent } from './pages/users/leccion/leccion.component';
import { LeccionesComponent } from './pages/users/lecciones/lecciones.component';
import { LoginComponent } from './pages/users/login/login.component';
import { ResultadosComponent } from './pages/users/resultados/resultados.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
    pathMatch: 'full'
  },
  {
    path: 'cuestionario/:leccion',
    component: CuestionarioComponent
  },
  {
    path: 'lecciones',
    component: LeccionesComponent
  },
  {
    path: 'lecciones/:leccion',
    component: LeccionComponent
  },
  {
    path: 'resultados/:leccion',
    component: ResultadosComponent
  },
  {
    path: 'CMS/login',
    component: LoginCMSComponent
  },
  {
    path: 'CMS/usuarios',
    component: UsuariosComponent
  },
  {
    path: '**',
    redirectTo: 'lecciones'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
