import { Injectable } from '@angular/core';
import { Previsao } from './model/previsao';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PrevisoesService {

  url: string = 'http://api.openweathermap.org/data/2.5/forecast?q=São%20paulo&appid=ef0b0973b783e0614ac87612ec04344b&units=metric&lang=pt_br&cnt=16'

  constructor(
    private httpClient: HttpClient
  ) { }


  /*public obterPrevisoes(): Observable<Previsao[]> {
    return this.httpClient.get<Previsao[]>(this.url);
  }*/

  public obterPrevisoes(nomeCidade: string): Observable<Previsao[]> {
    return this.httpClient.get<Previsao[]>(this.url);
  }

  /*previsoes: Previsao[] = [
    {
      data: '20/02/2020 15:00',
      descricao: 'Sol',
      tempMax: 32,
      tempMin: 27,
      humidity: 0.87,
      imgURL: '../assets/01d.png'
    },
    {
      data: '20/02/2020 18:00',
      descricao: 'Sol com nuvens',
      tempMax: 28,
      tempMin: 22,
      humidity: 0.85,
      imgURL: '../assets/02d.png'
    },
    {
      data: '20/02/2020 21:00',
      descricao: 'Noite limpa',
      tempMax: 24,
      tempMin: 18,
      humidity: 0.82,
      imgURL: '../assets/01n.png'
    }

  ];*/
}
