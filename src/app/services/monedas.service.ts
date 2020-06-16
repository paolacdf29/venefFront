import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MonedasService {

  currencies = [
    {ppal: "VEN", secnd:"ARS", factor:1/1500, seleccionado: false},
    {ppal: "VEN", secnd:"BRZ", factor:1/12, seleccionado: false},
    {ppal: "ARS", secnd:"VEN", factor:1500, seleccionado: false},
    {ppal: "BRZ", secnd:"VEN", factor:12, seleccionado: false},
    {ppal: "ARS", secnd:"USD", factor:1/120, seleccionado: false}
  ]

  currency = null;

  constructor(private http: HttpClient) { }

  getMonedas(){
    return this.http.get<any[]>('src/assets/info/criptos.json')
  }

  seleccionaCambio(item){
    this.currencies.map(item => item.seleccionado = false);
    item.seleccionado = true;
    this.currency = item;
  }

  buscarmoneda(ppal){
    let encontrada = [];
    this.currencies.map(currency => {
      if(currency.ppal == ppal){
        encontrada.push(currency);
      };
    })
    return encontrada;
  }
}
