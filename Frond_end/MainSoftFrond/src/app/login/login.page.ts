import { Component, OnInit } from '@angular/core';
import { MainServiceService } from '../service/main-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private service: MainServiceService) { }

  arrayPost: any;
  public nombre: any;
  public contrasena: any;


  ngOnInit() {
    // this.getLogin();
  }

  validarUsuario() {
    const data = {
      nombre: this.nombre,
      contrasena: this.contrasena,
    }
    this.service.setUsuarios(data).subscribe(Response => {
      console.log(Response);
    })
  }

  // getLogin() {
  //   this.service.getUsuarios().subscribe(Response => {
  //     this.arrayPost = Response;
  //     console.log(this.arrayPost);
  //   })
  // }

}
