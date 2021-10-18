import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
  styleUrls: ['./resultados.component.css']
})

export class ResultadosComponent implements OnInit {
  cargado: boolean = false;

  constructor() { }

  progreso: string = 'res-75';

  ngOnInit(): void {
    this.cargado = true;
  }

  public cambioclase() {
    return 'rs-75';
  }
}