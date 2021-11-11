import { Component, OnInit } from '@angular/core';
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
    private service: DatosService
  ) {
    this.service.getEncuestas().subscribe(
      response => {
        console.log(response);
        
        if (response.success) {
          this.encuestas = response.data
        };
      }
    );
  }

  ngOnInit(): void {
  }

}
