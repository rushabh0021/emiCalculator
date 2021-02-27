import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculateEmiService {

  constructor() { }

  EMIVal2(loanAmount, annualInterestrate, loanDuration,) {
    let interest = annualInterestrate / 1200;
    let term = loanDuration * 12;
    let top = Math.pow((1 + interest), term);
    let bottom = top - 1;
    let ratio = top / bottom;
    let EMI = loanAmount * interest * ratio;
    let Total: any = EMI * term;
    const EMIObj = {
      emi: Number(EMI.toFixed(0)),
      totalAmount: Total.toFixed(0),
      principal: loanAmount,
      intrest: Total.toFixed(0) - loanAmount
    };

    return EMIObj;
  }


}
