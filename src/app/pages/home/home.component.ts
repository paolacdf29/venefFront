import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MonedasService } from '../../services/monedas.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  //currencies: Observable<any[]>;  
  currencies = [
    {ppal: "BS", comp: "BS/ARS", precio: 1500, icon: "fab fa-bitcoin"},
    {ppal: "ARS", comp: "BTC/ARS", precio: 1168200, icon: "fab fa-bitcoin"},
    {ppal: "ARS", comp: "XLM/ARS", precio: 9.42, icon: "fab fa-bitcoin"},
    {ppal: "ARS", comp: "EOS/ARS", precio: 337, icon: "fab fa-bitcoin"},
    {ppal: "EUR", comp: "ETH/EUR", precio: 207, icon: "fab fa-bitcoin"}
  ]
  
  SlideOptions = { items: 3, dots: false, nav: false };  
  CarouselOptions = { items: 3, dots: false, nav: false };  

  constructor(private monedas: MonedasService) { }

  ngOnInit() {
    //this.currencies = this.monedas.getMonedas()
  }

}
