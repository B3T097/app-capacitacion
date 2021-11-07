import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

import { DatosService } from '../../services/datos.service';

@Component({
  selector: 'app-leccion',
  templateUrl: './leccion.component.html',
  styleUrls: ['./leccion.component.css']
})

export class LeccionComponent implements OnInit {

  leccion: any = {
    leccion: '',
    video: ''
  };
  encuesta: number = 0;
  urlSafe: SafeResourceUrl = '';

  constructor(  private activatedRoute: ActivatedRoute,
                private routing: Router,
                public service: DatosService,
                public sanitizer: DomSanitizer ) {
    
    
    
  }

  ngOnInit(): void {
    let params: any = this.activatedRoute.snapshot.params;
    let idSeccion = params['leccion'];
    this.encuesta = idSeccion;
    console.log(idSeccion);
    this.service.getLeccion( idSeccion ).subscribe(
      resp => {
        console.log(resp);
        
        if (resp.success) {
          this.leccion = resp.data[0];
          this.urlSafe= this.sanitizer.bypassSecurityTrustResourceUrl( `https://www.youtube.com/embed/${ this.leccion.video }` );
        } else {
          this.routing.navigate(['/lecciones']);
        }
      }
    );
  }

}
