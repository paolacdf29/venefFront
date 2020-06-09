import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.scss']
})
export class ContactoComponent implements OnInit {

  wapp: number = 5491128080059;
  wapp2: number = 5491122511183;
  msj: string = "Hola!%20me%20interesa%20cambiar%20con%20VENEF";
  mail = {
    msj: "",
    mail: "",
    cel: null,
    nombre: ""
  }

  constructor() { }

  ngOnInit() {
  }

  enviarmsj(evento){
    console.log(evento)
  }

}
