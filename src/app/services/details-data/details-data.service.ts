import { Injectable } from '@angular/core';
import { SessionDataService } from '../session-data/session-data.service';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DetailsDataService {


  detailsData: any;

  amountEnrolls = new BehaviorSubject<number>(0);

  constructor() {


  }

  ngOnInit(){


  }

  updateAmountEnrolls(amount: number){
    this.amountEnrolls.next(amount);
  }








}
