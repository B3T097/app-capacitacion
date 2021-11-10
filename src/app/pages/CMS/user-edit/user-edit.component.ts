import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DatosService } from '../../services/datos.service';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: [
    './user-edit.component.css', 
    '../../../../assets/css/estilos-cms.css',
    '../../../../assets/css/all.min.css'
  ]
})


export class UserEditComponent implements OnInit {
  @ViewChild('nombre') nombre!: ElementRef;
  @ViewChild('correo') correo!: ElementRef;
  @ViewChild('pwd') pwd!: ElementRef;
  @ViewChild('rol') rol!: ElementRef;
  @ViewChild('area') area!: ElementRef;
  @ViewChild('puesto') puesto!: ElementRef;

  alerta: boolean = false;

  usuario: any = {
    id: 0,
    nombre: '',
    correo: '',
    password: '',
    rol: '2',
    area: '',
    puesto: ''
  }

  constructor(
    private service: DatosService,
    private routing: Router,
    private activatedRoute: ActivatedRoute
  ) {
    let params: any = this.activatedRoute.snapshot.params;
    let id = params['id'];
    if ( id != undefined && id != null ) {
      this.service.getUsuario( id ).subscribe(
        response => {
          console.log(response);
          let datos: any = response.data[0];
          this.usuario.id = datos.id;
          this.usuario.nombre = datos.nombre;
          this.usuario.correo = datos.correo;
          this.usuario.password = datos.password;
          this.usuario.rol = datos.rol;
          this.usuario.area = datos.area;
          this.usuario.puesto = datos.puesto;
      });
    }
  }

  ngOnInit(): void {
  }

  guardar(){
    if ( this.usuario.nombre == '' ) {
      this.nombre.nativeElement.focus();
      return;
    }

    if ( this.usuario.correo == '' ) {
      this.correo.nativeElement.focus();
      return;
    }

    if ( this.usuario.password == '' ) {
      this.pwd.nativeElement.focus();
      return;
    }

    if ( this.usuario.rol == '' ) {
      this.rol.nativeElement.focus();
      return;
    }

    if ( this.usuario.area == '' ) {
      this.area.nativeElement.focus();
      return;
    }

    if ( this.usuario.puesto == '' ) {
      this.puesto.nativeElement.focus();
      return;
    }

    this.service.NewUsuario( this.usuario ).subscribe(
      response => {
        console.log(response)
        if ( response.success ) {
          this.routing.navigate(['/CMS/usuarios'])
        } else {
          this.alerta = true;
          setTimeout(() => {
            this.alerta = false;
          }, 5000);
        }
      }
    );
    
  }

}
