import { Component, OnInit } from '@angular/core';
import { MainServiceService } from '../service/main-service.service';

@Component({
  selector: 'app-consult-aplicaciones',
  templateUrl: './consult-aplicaciones.page.html',
  styleUrls: ['./consult-aplicaciones.page.scss'],
})
export class ConsultAplicacionesPage implements OnInit {

  constructor(private service: MainServiceService) { }

  arrayPost: any;


  ngOnInit() {
    this.obtenberAplicados();
  }

  obtenberAplicados() {
    this.service.getAplicacionOferta().subscribe(Response => {
      this.arrayPost = Response;
    })
  }

}
