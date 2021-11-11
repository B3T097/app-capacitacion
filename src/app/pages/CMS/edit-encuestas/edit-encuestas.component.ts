import { Component, OnInit } from '@angular/core';
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

  public onChange( event: CKEditor4.EventInfo ) {
    this.encuesta.leccion.texto = event.editor.getData();
  }

  constructor(
    private service: DatosService
  ) {
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
