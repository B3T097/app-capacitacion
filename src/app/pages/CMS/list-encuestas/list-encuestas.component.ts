import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DatosService } from '../../services/datos.service';

@Component({
  selector: 'app-list-encuestas',
  templateUrl: './list-encuestas.component.html',
  styleUrls: [
    './list-encuestas.component.css',
    '../../../../assets/css/estilos-cms.css',
    '../../../../assets/css/all.min.css'
  ]
})
export class ListEncuestasComponent implements OnInit {

  encuestas: any[] = [];

  constructor(
    private service: DatosService,
    private routing: Router
  ) {
    this.service.getEncuestas().subscribe(
      response => {
        if (response.success) {
          this.encuestas = response.data
        };
      }
    );
  }

  ngOnInit(): void {
  }

  eliminarEncuesta( id:number ){
    console.log(id);
    
    this.service.deleteEncuesta( id )
      .subscribe(arg => {
        if ( arg.success ) {
          this.service.getEncuestas().subscribe(
            response => {
              if (response.success) {
                this.encuestas = response.data
              };
            }
          );
        }
      });
    
  }

}
