import { Component, OnInit } from '@angular/core';
import { MainServiceService } from '../service/main-service.service';

@Component({
  selector: 'app-registro-ofert',
  templateUrl: './registro-ofert.page.html',
  styleUrls: ['./registro-ofert.page.scss'],
})
export class RegistroOfertPage implements OnInit {

  constructor(private queries: MainServiceService) { }

  ngOnInit() {
  }

  getQuery(){

    const datos = {
      query: 'profiles',
      params: {
        active: true
      }
    }
    this.queries.getQuery(datos).subscribe(data => {
      console.log(data)
    })
  }

}
