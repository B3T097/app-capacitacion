import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DatosService } from '../../services/datos.service';

@Component({
  selector: 'app-edit-respuestas',
  templateUrl: './edit-respuestas.component.html',
  styleUrls: ['./edit-respuestas.component.css']
})

export class EditRespuestasComponent{

  letras: string[] = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];
  preguntas: any[] = [];
  numPreguntas: number = 0;
  encuesta: number = 0;
  respuestas: any[] = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private routing: Router,
    public service: DatosService
  ) {
    let params: any = this.activatedRoute.snapshot.params;
    let idLeccion = params['id'];
    this.encuesta = idLeccion;
    this.service.getPreguntas( idLeccion ).subscribe(
      resp => {
        if (resp.success) {
          this.preguntas = resp.data;
          this.numPreguntas = this.preguntas.length;
          this.service.getRespuestas( idLeccion )
            .subscribe(arg => {
              let correctas = arg.data.map( function( value: any ){
                return {
                  idPregunta: "pregunta-" + value.id_pregunta,
                  idRespuesta: "respuesta-" + value.id_respuesta
                };
              });
              this.respuestas = correctas;
              
              for (let i = 0; i < this.respuestas.length; i++) {
                const element = this.respuestas[i];
                this.seleccioando( element.idRespuesta, element.idPregunta );
              }
            });
          
        } else {
          this.routing.navigate(['/lecciones']);
        }
      }
    );
  }

  seleccioando(id: any, idPregunta: any){
    let respuesta: any = document.querySelector("#" + id);
    let pregunta: any = document.getElementsByClassName(idPregunta);
    for (let i = 0; i < pregunta.length; i++) {
      const element = pregunta[i];
      element.classList.remove("resp_marca");
    }
    respuesta.classList.add("resp_marca");

    let existe: boolean = false;
    let auxI: number = 0;

    for (let i = 0; i < this.respuestas.length; i++) {
      const element = this.respuestas[i];
      if (element.idPregunta == idPregunta) {
        existe = true;
        auxI = i;
      }
    }

    if ( !existe ) {
      this.respuestas.push({
        idPregunta: idPregunta,
        idRespuesta: id
      })
    } else {
      this.respuestas[auxI].idRespuesta = id;
    }
  }

  guardar(){
    console.log( this.encuesta );
    console.log( this.respuestas );
    
    
    this.service.saveRespuestasCorrectas( this.encuesta, this.respuestas )
      .subscribe(arg => {
        console.log( arg );
        
        if (arg.success) {
          this.routing.navigate(['/CMS/encuestas']);
        }
      });
  }

}
