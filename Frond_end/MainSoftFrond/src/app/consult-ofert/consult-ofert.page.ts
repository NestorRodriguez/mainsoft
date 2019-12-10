import { Component, OnInit } from '@angular/core';
import { MainServiceService } from '../service/main-service.service';

@Component({
  selector: 'app-consult-ofert',
  templateUrl: './consult-ofert.page.html',
  styleUrls: ['./consult-ofert.page.scss'],
})
export class ConsultOfertPage implements OnInit {

  constructor(private service: MainServiceService) { }

  arrayPost:any;

  ngOnInit() {
    this.obtenerOfertas();
    console.log("Prueba de servicio",Response);
  }


  obtenerOfertas(){
    this.service.getRegistroOfertas().subscribe(Response => {
      this.arrayPost = Response;
    })
  }

}
