import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InfoPagina } from '../interfaces/info-pagina.interfaces';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  info:InfoPagina={};

  cargada = false;

  constructor(private http: HttpClient) { 

    console.log('servicio de infopagina listo');

    //leer el archivo JSON y tomar sus propiedades para ser leido en las paginas

    this.http.get('assets/data/data-pagina.json')
      .subscribe((resp: InfoPagina) => {

        this.cargada = true;
        this.info = resp;
        console.log(resp.email);

       }
      )
     }
  }
