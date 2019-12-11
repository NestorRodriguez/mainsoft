import { Component, OnInit } from '@angular/core';
import { MainServiceService } from '../service/main-service.service';
import { Platform } from '@ionic/angular';
import { FileTransfer } from '@ionic-native/file-transfer/ngx';
import { FileOpener } from '@ionic-native/file-opener/ngx';
import { DocumentViewer, DocumentViewerOptions } from '@ionic-native/document-viewer/ngx';
import { File } from '@ionic-native/File/ngx';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  constructor(private service: MainServiceService, private platform: Platform, private file: File, private ft: FileTransfer,
    private fileOpener: FileOpener, private document: DocumentViewer) { }

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

  openLocalPdf() {
    let filePath = this.file.applicationDirectory + 'www/assets';
    if (this.platform.is('android')) {
      let fakeName = Date.now();
      this.file.copyFile(filePath, '5-tools.pdf', this.file.dataDirectory, `${fakeName}.pdf`).then(result => {
        this.fileOpener.open(result.nativeURL, 'application/pdfx');
      });
    } else {
      const options: DocumentViewerOptions = {
        title: 'PDF'
      }
      this.document.viewDocument(`${filePath}/5-tools.pdf`, 'application/pdf', options);
    }

  }


  eliminarUsuario(id: string) {
    this.id = id;
    this.service.deleteUsuarios(id).subscribe(Response => {
      console.log(Response);
    })
  }

}
