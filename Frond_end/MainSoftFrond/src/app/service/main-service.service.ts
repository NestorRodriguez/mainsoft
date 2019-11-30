import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MainServiceService {

  urlUsuarios = 'http://localhost:3000/api/v1.0/usuario';
  urlRegistroOferta = 'http://localhost:3000/api/v1.0/registroOferta';
  urlAplicarOferta = 'http://localhost:3000/api/v1.0/aplicarOferta';
  urlRoles = 'http://localhost:3000/api/v1.0/roles';


  constructor(public http: HttpClient) { }

  getUsuarios() {
    return this.http.get(this.urlUsuarios);
  }

  // Ofertas
  getRegistroOfertas() {
    return this.http.get(this.urlRegistroOferta);
  }

  setRegistroOfertas(data: any) {
    return this.http.post(this.urlRegistroOferta, data);
  }

  getRegistroOfertasId(id: string) {
    return this.http.get(`${this.urlRegistroOferta}/${id}`);
  }

  putRegistroOfertas(data: any) {
    return this.http.put(this.urlRegistroOferta, data);
  }

  deleteRegistroOfertas(id: string) {
    return this.http.delete(`${this.urlRegistroOferta}/${id}`);
  }

  //Alicar Oferta

  getAplicacionOferta() {
    return this.http.get(this.urlAplicarOferta);
  }

  setAplicacionOferta(data: any) {
    return this.http.post(this.urlAplicarOferta, data);
  }

  setAplicacionOfertaid(id: String) {
    return this.http.get(`${this.urlAplicarOferta}/${id}`);
  }

  putAplicacionOferta(data: any) {
    return this.http.put(this.urlAplicarOferta, data);
  }

  deleteAplicacionOferta(id: string) {
    return this.http.delete(`${this.urlAplicarOferta}/${id}`);
  }

}
