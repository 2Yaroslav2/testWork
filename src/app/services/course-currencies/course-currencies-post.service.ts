import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CourseCurrenciesPostService {

  constructor(private httpClient: HttpClient) { }

  getCourseCurrencies(){
    const url = 'https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=3';
    return this.httpClient.get(url);
  }

}
