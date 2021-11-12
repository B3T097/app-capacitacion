import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditEncuestasComponent } from './pages/CMS/edit-encuestas/edit-encuestas.component';
import { EditPreguntasComponent } from './pages/CMS/edit-preguntas/edit-preguntas.component';
import { ListEncuestasComponent } from './pages/CMS/list-encuestas/list-encuestas.component';
import { LoginCMSComponent } from './pages/CMS/login-cms/login-cms.component';
import { UserEditComponent } from './pages/CMS/user-edit/user-edit.component';
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
    path: 'resultados',
    component: ResultadosComponent
  },
  {
    path: 'CMS',
    redirectTo: 'CMS/login'
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
    path: 'CMS/agregarUsuario',
    component: UserEditComponent
  },
  {
    path: 'CMS/editarUsuario/:id',
    component: UserEditComponent
  },
  {
    path: 'CMS/encuestas',
    component: ListEncuestasComponent
  },
  {
    path: 'CMS/agregarEncuesta',
    component: EditEncuestasComponent
  },
  {
    path: 'CMS/editarEncuesta/:id',
    component: EditEncuestasComponent
  },
  {
    path: 'CMS/editarPreguntas/:id',
    component: EditPreguntasComponent
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
