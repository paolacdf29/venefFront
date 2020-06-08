import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MonedasService {

  constructor(private http: HttpClient) { }

  getMonedas(){
    return this.http.get<any[]>('src/assets/info/criptos.json')
  }
}
