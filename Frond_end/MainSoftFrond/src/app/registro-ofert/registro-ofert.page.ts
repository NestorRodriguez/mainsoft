import { Component, OnInit } from '@angular/core';
import { MainServiceService } from '../service/main-service.service';

@Component({
  selector: 'app-registro-ofert',
  templateUrl: './registro-ofert.page.html',
  styleUrls: ['./registro-ofert.page.scss'],
})
export class RegistroOfertPage implements OnInit {

  constructor(private service: MainServiceService) { }

  public nombre_oferta: any;
  public descripcion_oferta: any;
  ngOnInit() {
  }
  guardarRegistro() {
    const data = {
      nombre_oferta: this.nombre_oferta,
      descripcion_oferta: this.descripcion_oferta
    }
    this.service.setRegistroOfertas(data).subscribe(Response => {
      console.log(Response);
    })
  }

  // getQuery(){

  //   const datos = {
  //     query: 'profiles',
  //     params: {
  //       active: true
  //     }
  //   }
  //   this.queries.getQuery(datos).subscribe(data => {
  //     console.log(data)
  //   })
  // }

}
