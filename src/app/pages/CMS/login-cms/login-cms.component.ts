import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { user } from '../../interfacez/user.interface';
import { DatosService } from '../../services/datos.service';

@Component({
  selector: 'app-login-cms',
  templateUrl: './login-cms.component.html',
  styleUrls: [
    './login-cms.component.css', 
    '../../../../assets/css/estilos-cms.css'
  ]
})
export class LoginCMSComponent implements OnInit {

  login: user = {
    id: 0,
    nombre: '',
    correo: '',
    password: '',
    area: '',
    puesto: ''
  }

  alerta: boolean = false;

  constructor( 
    private service: DatosService,
    public routing: Router ) { }

  ngOnInit(): void {
  }

  entrar(){
    console.log( this.login );
    
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

    this.service.VaidateLoginCMS( this.login )
      .subscribe( validacion => {
        console.log(validacion);
        
        if ( !validacion.success ) {
          this.alerta = true;
          setTimeout(() => {
            this.alerta = false;
          }, 1500);
        } else {
          let datos: user = validacion.data[0];
          
          sessionStorage.setItem('loginCMS', 'true');
          sessionStorage.setItem( 'nameUserCMS', datos.nombre );
          this.routing.navigate(['/CMS/usuarios']);
        }
      } );
  }

}
