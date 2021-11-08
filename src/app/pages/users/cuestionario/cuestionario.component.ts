import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DatosService } from '../../services/datos.service';
import { Preguntas } from '../interfaces/preguntas.interface';

@Component({
  selector: 'app-cuestionario',
  templateUrl: './cuestionario.component.html',
  styleUrls: ['./cuestionario.component.css']
})
export class CuestionarioComponent implements OnInit {
  // @ViewChild('respuesta') tableRow: ElementRef;

  letras: string[] = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];
  numPreguntas: number = 0;
  preguntas: Preguntas[] = [];
  respuestas: any[] = [];
  
  constructor(  
    private activatedRoute: ActivatedRoute,
    private routing: Router,
    public service: DatosService,
    private renderer: Renderer2
  ) {
    let params: any = this.activatedRoute.snapshot.params;
    let idSeccion = params['leccion'];
    this.service.getPreguntas( idSeccion ).subscribe(
      resp => {
        if (resp.success) {
          this.preguntas = resp.data;
          this.numPreguntas = this.preguntas.length;
        } else {
          this.routing.navigate(['/lecciones']);
        }
      }
    );
  }

  ngOnInit(): void {
    if ( !this.service.ValidarSession() ) {
      this.routing.navigate(['/']);
    }
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
    if ( this.respuestas.length == this.numPreguntas ) {
      this.service.saveRespuestas( this.respuestas );
      this.routing.navigate(['/resultados']);
    }
  }

}
