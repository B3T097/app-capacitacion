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
}
