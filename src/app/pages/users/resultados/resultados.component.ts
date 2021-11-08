import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DatosService } from '../../services/datos.service';

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
  styleUrls: ['./resultados.component.css']
})

export class ResultadosComponent implements OnInit {
  cargado: boolean = false;

  constructor(
    private service: DatosService,
    private routing: Router
  ) { }

  progreso: string = 'res-0';
  porcentaje: number = 0;
  numPreguntas: number = 0;
  aciertos: number = 0;
  mensaje: string = 'Felicidades ha aprobado este curso!!';

  ngOnInit(): void {
    this.cargado = true;
    let respuestas: any[] = this.service.respuestas;
    
    this.numPreguntas = respuestas.length;
    let id: number = respuestas[0]['idPregunta'].split('-')[1];
    
    this.service.getResultados( id ).subscribe(
      resp => {
        let encuesta = 0;
        for (let i = 0; i < resp.data.length; i++) {
          const respuesta = resp.data[i];
          let idPregunta1 = respuesta.id_pregunta;
          let idRespuesta1 = respuesta.id_respuesta;
          if ( encuesta == 0 ) {
            encuesta = respuesta.id_encuesta;
          }
          for (let e = 0; e < respuestas.length; e++) {
            const respuestaUser = respuestas[e];
            let idPregunta = respuestaUser['idPregunta'].split('-')[1];
            let idRespuesta = respuestaUser['idRespuesta'].split('-')[1];
            if (idPregunta1 == idPregunta) {
              if (idRespuesta1 == idRespuesta) {
                this.aciertos++;
              }
            }
          }
        }

        let porcentaje = ( this.aciertos / this.numPreguntas ) * 100;
        porcentaje = Number( porcentaje.toFixed(0) );
        this.porcentaje = porcentaje;
        this.progreso = "rs-" + porcentaje;

        if ( porcentaje < 70 ) {
          this.mensaje = "Vuelve a intentarlo.";
        } else if (porcentaje < 80) {
          this.mensaje = "Buen trabajo";
          this.service.setStatus( encuesta, this.service.IdUser, 1 ).subscribe(
            response => console.log(response)
          );
        } else {
          this.mensaje = "Excelente felicidades!!";
          this.service.setStatus( encuesta, this.service.IdUser, 1 ).subscribe(
            response => console.log(response)
          );
        }
        
      }
    );
     
  }
}