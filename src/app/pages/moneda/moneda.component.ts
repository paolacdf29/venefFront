import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { currency } from '../../interfaces/interfaces';
import { MonedasService } from '../../services/monedas.service';

@Component({
  selector: 'app-moneda',
  templateUrl: './moneda.component.html',
  styleUrls: ['./moneda.component.scss']
})
export class MonedaComponent implements OnInit {
  moneda: string;
  currencies: currency[];

  constructor(private router: ActivatedRoute,
              private monedas: MonedasService) { }

  ngOnInit() {
    this.moneda = this.router.snapshot.params.nombre 
    this.currencies = this.monedas.buscarmoneda(this.moneda);
  }

  solicitaroperacion(item){
    this.monedas.seleccionaCambio(item);
  }
}
