import { Component, OnInit } from '@angular/core';
import { MainServiceService } from '../service/main-service.service';

@Component({
  selector: 'app-consult-usuarios',
  templateUrl: './consult-usuarios.page.html',
  styleUrls: ['./consult-usuarios.page.scss'],
})
export class ConsultUsuariosPage implements OnInit {

  constructor(private service: MainServiceService) { }

  arrayPost:any;


  ngOnInit() {
    this.obtenerUsuarios();
  }

  obtenerUsuarios(){
    this.service.getUsuarios().subscribe(Response => {
      this.arrayPost = Response;
    })
  }
}
