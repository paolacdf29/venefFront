import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cambiar',
  templateUrl: './cambiar.component.html',
  styleUrls: ['./cambiar.component.scss']
})
export class CambiarComponent implements OnInit {

  currencies=[
    {from:"VEN", to:"ARS", factor:1/1500},
    {from:"VEN", to:"BRZ", factor:1/12},
    {from:"ARS", to:"VEN", factor:1500},
    {from:"BRZ", to:"VEN", factor:12}
  ]

  currency = {from:"", to:"", factor:0};
  transferir: number = 0;


  constructor() { }

  ngOnInit() {
  }

  seleccionaCambio(item){
    this.currency = item;
    console.log(this.currency)
  }

  typeEvent(evento){
    this.transferir = evento * this.currency.factor
  }

}
