import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DatosService } from '../../services/datos.service';

@Component({
  selector: 'app-edit-preguntas',
  templateUrl: './edit-preguntas.component.html',
  styleUrls: [
    './edit-preguntas.component.css',
    '../../../../assets/css/all.min.css'
  ]
})
export class EditPreguntasComponent {

  alerta: boolean = false;
  idEncuesta: number = 0;
  preguntas: any = [];
  letras: string[] = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];

  aleatorio( num: number ){
    let salida = '';
    for (let i = 0; i < num; i++) {
      salida += this.letras[ this.getRandomArbitrary( 0, 9 ) ];
    }
    return salida;
  }

  getRandomArbitrary(min: number, max: number) {
    let aux = Math.random() * (max - min) + min;
    return Number( aux.toFixed(0) );
  }

  constructor(
    private service: DatosService,
    private routing: Router,
    private activatedRoute: ActivatedRoute
  ) {
    let params: any = this.activatedRoute.snapshot.params;
    let id = params['id'];
    this.idEncuesta = id;
    if ( id != undefined && id != null ) {
      this.service.getPreguntas( id )
        .subscribe(response => {
          console.log(response.data);
          
          this.preguntas = response.data;
        });
    } else {
      this.routing.navigate(['/CMS/encuestas']);
    }
  }

  guardar(){
    this.service.savePreguntas( this.preguntas, this.idEncuesta )
      .subscribe(response => {
        console.log( response );
        if ( response.success ) {
          this.routing.navigate(['/CMS/encuestas']);
        }
      });
  }

  agregarRespuesta( idPregunta: number ){
    this.preguntas[idPregunta].respuestas.push({
      idRespuesta: this.aleatorio(5),
      resp: ""
    });

    console.log( this.preguntas );
  }

  agregarPregunta(){
    this.preguntas.push({
      idPregunta: this.aleatorio(5),
      pregunta: '',
      respuestas: [{
        idRespuesta: this.aleatorio(5),
        resp: ''
      }]
    })
    console.log( this.preguntas );
    
  }
}
