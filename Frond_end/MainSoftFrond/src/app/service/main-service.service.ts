import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MainServiceService {

  urlUsuarios = `${environment.url}/usuario`;
  urlRegistroOferta = `${environment.url}/registroOferta`;
  urlAplicarOferta = `${environment.url}/aplicarOferta`;
  urlRoles = `${environment.url}/roles`;
  urlQueries = `${environment.url}/queries/query`;

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

  getQuery(data: any) {
    return this.http.post(this.urlQueries, data);
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
