import { Component, OnInit } from '@angular/core';
import { QuestionsResponse } from '../interfaces/preguntas.interface';

@Component({
  selector: 'app-cuestionario',
  templateUrl: './cuestionario.component.html',
  styleUrls: ['./cuestionario.component.css']
})
export class CuestionarioComponent implements OnInit {

  list: Number[] = [1, 2, 3, 4, 5];

  flag: boolean = false;

  preguntas: QuestionsResponse[] = [
    {
      "pregunta": "Pregunta 1",
      "respuestas": {
        "a": "Respuesta 1",
        "b": "Respuesta 2",
        "c": "Respuesta 3",
        "d": "Respuesta 4"
      }
    },
    {
      "pregunta": "Pregunta 2",
      "respuestas": {
        "a": "Respuesta 5",
        "b": "Respuesta 6",
        "c": "Respuesta 7",
        "d": "Respuesta 8"
      }
    },
    {
      "pregunta": "Pregunta 3",
      "respuestas": {
        "a": "Respuesta 9",
        "b": "Respuesta 10",
        "c": "Respuesta 11",
        "d": "Respuesta 12"
      }
    },
    {
      "pregunta": "Pregunta 4",
      "respuestas": {
        "a": "Respuesta 12",
        "b": "Respuesta 14",
        "c": "Respuesta 15",
        "d": "Respuesta 16"
      }
    },
    {
      "pregunta": "Pregunta 5",
      "respuestas": {
        "a": "Respuesta 17",
        "b": "Respuesta 18",
        "c": "Respuesta 19",
        "d": "Respuesta 20"
      }
    }
  ]

  // roots: any[] = this.preguntas.map(function( value ) {
  //   let response: any[] = [];
  //   response[0] = value.pregunta;
  //   let aux = JSON.parse( value.respuestas );
  //   response[1] = aux.map(function( value2 ) {
  //     let response2: any[] = [];
  //     response[0] = value2.a;
  //   })
  // });

  
  constructor() { }

  ngOnInit(): void {
  }

  seleccioando(){
    this.flag = !this.flag;
    console.log( this.flag );
    
  }

}
