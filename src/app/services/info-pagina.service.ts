import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InfoPagina } from '../interfaces/info-pagina.interfaces';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  info:InfoPagina={};
  cargada = false;

  equipo: any[] = [];

  constructor(private http: HttpClient) { 

  this.cargarInfo();
  this.cargarEquipo();
    

     }

     private cargarInfo(){
//leer el archivo JSON y tomar sus propiedades para ser leido en las paginas
      this.http.get('assets/data/data-pagina.json')
      .subscribe((resp: InfoPagina) => {

        this.cargada = true;
        this.info = resp;
   

       });
     }

     private cargarEquipo(){

      this.http.get('https://dotcl-sodaparr.firebaseio.com/equipo.json')
      .subscribe((resp: any[]) => {

        this.equipo  =resp;
      });

     }



  }
