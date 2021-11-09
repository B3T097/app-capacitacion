import { Component, OnInit } from '@angular/core';
import { DatosService } from 'src/app/pages/services/datos.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: [
    './header.component.css', 
    '../../../../../assets/css/estilos-cms.css',
    '../../../../../assets/css/all.min.css'
  ]
})
export class HeaderComponent implements OnInit {
  nombre: string = '';
  constructor(
    private service: DatosService
  ) {
    this.nombre = this.service.NombreCMS;
  }

  ngOnInit(): void {
  }

}
