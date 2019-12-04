import { Component, OnInit } from '@angular/core';
import { MainServiceService } from '../service/main-service.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  constructor(private service: MainServiceService) { }

  public nombre: any;
  public documento: any;
  public correo: any;
  public telefono: any;
  public contrasena: any;
  public descripcion: any;
  public carga_hv: any;
  public roles_id: any;
  public id: String;

  ngOnInit() {
  }

  guardarRegistroUsuarios() {
    const data = {
      nombre: this.nombre,
      documento: this.documento,
      correo: this.correo,
      telefono: this.telefono,
      contrasena: this.contrasena,
      descripcion: this.descripcion,
      carga_hv: this.carga_hv,
      roles_id: this.roles_id
    }
    this.service.setUsuarios(data).subscribe(Response => {
      console.log(Response);
    })
  }


  eliminarUsuario(id: string) {
    this.id = id;
    this.service.deleteUsuarios(id).subscribe(Response => {
      console.log(Response);
    })
  }

}
