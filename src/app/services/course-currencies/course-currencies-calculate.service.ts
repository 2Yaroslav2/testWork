import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CourseCurrenciesCalculateService {

  constructor() { }

  setCurrencyCount(uahCount: number, currentCurrencyBuy: number): number{
    return Number((uahCount / currentCurrencyBuy).toFixed(3));
  }

  setCurrencyUAH(currentCurrencyCount: number, currentCurrencyBuy: number): number{
    return Number((currentCurrencyCount * currentCurrencyBuy).toFixed(3));
  }
}
