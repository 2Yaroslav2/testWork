import {Component, OnInit} from '@angular/core';
import {CourseCurrenciesPostService} from "../../services/course-currencies/course-currencies-post.service";
import {ICourseCurrency} from "../../models/course-currencies";
import {FormBuilder, FormGroup} from "@angular/forms";
import {CourseCurrenciesCalculateService} from "../../services/course-currencies/course-currencies-calculate.service";

@Component({
  selector: 'app-course-currencies',
  templateUrl: './course-currencies.component.html',
  styleUrls: ['./course-currencies.component.scss']
})
export class CourseCurrenciesComponent implements OnInit {

  courseCurrencies: Array<ICourseCurrency> = [];
  displayedColumns: string[] = ['ccy', 'buy', 'sale'];
  dataSource: any;

  currentCurrencyCount: number = 0;
  uahCount: number = 0;

  currentCurrencyForm!: FormGroup;

  constructor(private courseCurrenciesPostService: CourseCurrenciesPostService,
              private courseCurrenciesCalculateService: CourseCurrenciesCalculateService,
              private formBuilder: FormBuilder,) {
  }

  ngOnInit(): void {
    this.currentCurrencyForm = this.formBuilder.group({
      currency: []
    });

    this.getInfo();
  }

  getInfo() {
    this.getCourseCurrencies();
  }

  getCourseCurrencies() {
    this.courseCurrenciesPostService.getCourseCurrencies().subscribe((response) => {
      this.courseCurrencies = response as Array<ICourseCurrency>;
      this.courseCurrencies.splice(3, 1);
      this.dataSource = this.courseCurrencies;
    }, error => {
      console.error('There was an error (getCourseCurrencies)!', error);
    })
  }

  changeUAH(sum: any) {
    let currentCurrency: ICourseCurrency = this.currentCurrencyForm.controls.currency.value;
    this.uahCount = sum.value;

    this.currentCurrencyCount = this.courseCurrenciesCalculateService.setCurrencyCount(this.uahCount, currentCurrency.buy);
  }

  onCurrencySelect() {
    let currentCurrency: ICourseCurrency = this.currentCurrencyForm.controls.currency.value;

    this.uahCount = this.courseCurrenciesCalculateService.setCurrencyUAH(this.currentCurrencyCount, currentCurrency.buy);
  }

  changeCurrency(sum: any) {
    let currentCurrency: ICourseCurrency = this.currentCurrencyForm.controls.currency.value;
    this.currentCurrencyCount = sum.value;

    this.uahCount = this.courseCurrenciesCalculateService.setCurrencyUAH(this.currentCurrencyCount, currentCurrency.buy);
  }
}
