import { Component, OnInit } from '@angular/core';
import { DatosService } from '../../services/datos.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: [
    './usuarios.component.css', 
    '../../../../assets/css/estilos-cms.css',
    '../../../../assets/css/all.min.css'
  ]
})
export class UsuariosComponent implements OnInit {

  usuarios: any[] = [];

  constructor(
    private service: DatosService
  ) {
    this.service.getUsuarios().subscribe(
      response => {
        console.log(response);
        this.usuarios = response.data;
      }
    );
  }

  ngOnInit(): void {
  }

}
