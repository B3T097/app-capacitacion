import { JsonPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { user } from '../../interfacez/user.interface';
import { DatosService } from '../../services/datos.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  login: user = {
    id: 0,
    nombre: '',
    correo: '',
    password: '',
    area: '',
    puesto: ''
  }

  alerta: boolean = false;
  
  constructor( private service: DatosService,
              public routing: Router ) { }

  entrar(){
    if ( this.login.correo == '' ) {
      this.alerta = true;
      setTimeout(() => {
        this.alerta = false;
      }, 1500);
      return;
    }

    if ( this.login.password == '' ) {
      this.alerta = true;
      setTimeout(() => {
        this.alerta = false;
      }, 1500);
      return;
    }

    this.service.VaidateLogin( this.login )
      .subscribe( validacion => {
        if ( !validacion.success ) {
          this.alerta = true;
          setTimeout(() => {
            this.alerta = false;
          }, 1500);
        } else {
          let datos: user = validacion.data[0];
          console.log(datos);
          
          sessionStorage.setItem('login', 'true');
          sessionStorage.setItem( 'idUser', datos.id + '' );
          sessionStorage.setItem( 'nameUser', datos.nombre );
          this.routing.navigate(['lecciones']);
        }
      } );
  }

}
