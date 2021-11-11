import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CKEditor4 } from 'ckeditor4-angular';
import { DatosService } from '../../services/datos.service';

@Component({
  selector: 'app-edit-encuestas',
  templateUrl: './edit-encuestas.component.html',
  styleUrls: ['./edit-encuestas.component.css']
})
export class EditEncuestasComponent implements OnInit {

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
          console.log(response);
          let datos: any = response.data.encuesta[0];
          let users: any = response.data.usuarios;
          console.log(users);
          
          this.encuesta.id = datos.id;
          this.encuesta.nombre = datos.nombre;
          this.encuesta.descripcion = datos.descripcion;
          this.encuesta.leccion.texto = datos.leccion;
          this.encuesta.leccion.video = datos.video;
          this.encuesta.usuarios = users.map( function(user: any){
            return user.id;
          });
          console.log(this.encuesta);
          
      });
    }

    this.service.getUsuarios()
      .subscribe( response => {
        if (response.success) {
          this.usuarios = response.data;
        }
      });
  }

  ngOnInit(): void {
  }

  guardar(){
    console.log(this.encuesta);
    this.service.NewEncuesta( this.encuesta )
      .subscribe( response => {
        console.log(response);
        
      });
  }

}
