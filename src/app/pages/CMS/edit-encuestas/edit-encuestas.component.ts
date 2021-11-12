import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DatosService } from '../../services/datos.service';

@Component({
  selector: 'app-edit-encuestas',
  templateUrl: './edit-encuestas.component.html',
  styleUrls: ['./edit-encuestas.component.css']
})
export class EditEncuestasComponent {

  alerta: boolean = false;
  encuesta: any = {
    id: '0',
    nombre: '',
    descripcion: '',
    leccion: {
      texto: '',
      video: ''
    },
    usuarios: []
  }

  usuarios: any[] = []

  constructor(
    private service: DatosService,
    private routing: Router,
    private activatedRoute: ActivatedRoute
  ) {
    let params: any = this.activatedRoute.snapshot.params;
    let id = params['id'];
    if ( id != undefined && id != null ) {
      this.service.getEncuesta( id ).subscribe(
        response => {
          let datos: any = response.data.encuesta[0];
          let users: any = response.data.usuarios;
          
          this.encuesta.id = datos.id;
          this.encuesta.nombre = datos.nombre;
          this.encuesta.descripcion = datos.descripcion;
          this.encuesta.leccion.texto = datos.leccion;
          this.encuesta.leccion.video = datos.video;
          this.encuesta.usuarios = users.map( function(user: any){
            return user.id;
          });
      });
    }

    this.service.getUsuarios()
      .subscribe( response => {
        if (response.success) {
          this.usuarios = response.data;
        }
      });
  }

  guardar(){
    console.log(this.encuesta);
    this.service.NewEncuesta( this.encuesta )
      .subscribe( response => {
        console.log(response);
        if ( response.success ) {
          this.routing.navigate(['/CMS/encuestas']);
        }
      });
  }

}
