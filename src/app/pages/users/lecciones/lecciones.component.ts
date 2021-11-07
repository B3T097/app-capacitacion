import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DatosService } from '../../services/datos.service';

@Component({
  selector: 'app-lecciones',
  templateUrl: './lecciones.component.html',
  styleUrls: ['./lecciones.component.css']
})
export class LeccionesComponent implements OnInit {

  nombre: string|null = '';
  lecciones: any[] = [];

  constructor(  private service: DatosService,
    public routing: Router ) { }

  ngOnInit(): void {
    if ( !this.service.ValidarSession() ) {
      this.routing.navigate(['/']);
    } else{
      this.nombre = this.service.Nombre;
    }

    this.service.getLecciones( this.service.IdUser )
      .subscribe(
        resp => {
          console.log( 'Lecciones', resp );
          this.lecciones = resp.data;
        }
      );
  }

  cerrarSession(){
    sessionStorage.clear();
    this.routing.navigate(['/']);
  }
}
