import { Component, OnInit } from '@angular/core';
import { MonedasService } from '../../services/monedas.service';

@Component({
  selector: 'app-cambiar',
  templateUrl: './cambiar.component.html',
  styleUrls: ['./cambiar.component.scss']
})
export class CambiarComponent implements OnInit {

  transferir: number = 0;


  constructor(public monedas: MonedasService) { }

  ngOnInit() {
  }

  typeEvent(evento){
    this.transferir = evento * this.monedas.currency.factor
  }

}
