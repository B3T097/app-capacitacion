import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { responseLogin, user } from '../interfacez/user.interface';

@Injectable({
  providedIn: 'root'
})
export class DatosService {

  private baseUrl: string = "http://localhost:8888/";

  constructor( private http: HttpClient ) { }

  VaidateLogin( login: user ) {
    return this.http.get<responseLogin>(`${ this.baseUrl }login/${ login.correo }/${ login.password }`);
  }

  ValidarSession(){
    let session: string|null = sessionStorage.getItem('login');
    if ( session != null && session == "true" ) {
      return true;
    } else {
      return false;
    }
  }

  get Nombre(){
    let nombre: string = '';
    if ( sessionStorage.getItem('nameUser') != null ) {
      nombre = sessionStorage.getItem('nameUser') + '';
    }
    return nombre;
  }

  get IdUser(){
    let id: number = 0;
    if ( sessionStorage.getItem('idUser') != null ) {
      id = Number( sessionStorage.getItem('idUser') );
    }
    return id;
  }

  getLecciones( id: number ){
    let url: string = `${ this.baseUrl }lecciones/${ id }`;
    return this.http.get<any>( url );
  }

  getLeccion( id: number ){
    let url: string = `${ this.baseUrl }leccion/${ id }`;
    return this.http.get<any>( url );
  }

  getPreguntas( id:number ){
    let url: string = `${ this.baseUrl }preguntas/${ id }`;
    return this.http.get<any>( url );
  }

  saveRespuestas( respuestas: any[] ){
    let response = JSON.stringify( respuestas );
    sessionStorage.setItem('respuestas', response);
  }

  get respuestas(){
    let datos: any[] = [];
    if ( sessionStorage.getItem('respuestas') != null ) {
      datos = JSON.parse( sessionStorage.getItem('respuestas') + '' );
    }
    return datos;
  }

  getResultados( idPregunta: number ){
    let url: string = `${ this.baseUrl }respuestas/${ idPregunta }`;
    return this.http.get<any>( url );
  }

  setStatus( idEncuesta:number, user:number, status: number ){
    let url: string = `${ this.baseUrl }statusEncuesta/${ idEncuesta }/${ user }/${ status }`;
    return this.http.get<any>( url );
  }

}
