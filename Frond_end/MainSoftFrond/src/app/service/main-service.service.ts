import { Injectable } from '@angular/core';
import { HttpClient } from 'selenium-webdriver/http';

@Injectable({
  providedIn: 'root'
})
export class MainServiceService {

  urlUsuarios = 'http://localhost:3000/';
  urlRegistroOferta='http://localhost:3000/';
  urlRoles='http://localhost:3000/';
  urlAplicarOferta='http://localhost:3000/';


  constructor(public http: HttpClient) { }
}
