import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { CalculateEmiService } from '../calculate-emi.service';

@Component({
  selector: 'app-form-component',
  templateUrl: './form-component.component.html',
  styleUrls: ['./form-component.component.scss']
})
export class FormComponentComponent implements OnInit {
  principal: number = 100000;
  rateOfIntrest: number = 9.5;
  tenure: number = 7;

  displayValues = {
    principal: 50000,
    emi: 15000,
    intrest: 30000,
    totalAmount: 13000
  }

  constructor(private calculateEmi: CalculateEmiService) { }

  ngOnInit(): void {

  }

  changeLoanAmount(event) {

    var value = $(event.target).val();
    this.principal = value;
    /* var amount = (new Number(value)).toLocaleString('en-In', currencyObj); */
    $('#inputAmount').val(value);
    this.displayValues = this.calculateEmi.EMIVal2(this.principal, this.rateOfIntrest, this.tenure);
  }

  changeROI(event) {
    var value = $(event.target).val();
    this.rateOfIntrest = value;
    $('#inputRoi').val(value);
    this.displayValues = this.calculateEmi.EMIVal2(this.principal, this.rateOfIntrest, this.tenure);
  }

  changeTenure(event) {
    var value = $(event.target).val();
    this.tenure = value;
    $('#inputYears').val(value);
    this.displayValues = this.calculateEmi.EMIVal2(this.principal, this.rateOfIntrest, this.tenure);
  }
}
