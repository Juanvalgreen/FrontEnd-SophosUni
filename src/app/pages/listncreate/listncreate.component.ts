import { Component, } from '@angular/core';
import { ListingService } from 'src/app/services/listing/listing.service';
import { SessionDataService } from 'src/app/services/session-data/session-data.service';

@Component({
  selector: 'app-listncreate',
  templateUrl: './listncreate.component.html',
  styleUrls: ['./listncreate.component.sass']
})
export class ListncreateComponent {

  currentList: string;

  constructor(private listingService: ListingService, private sessionData: SessionDataService){

    this.currentList = '';
  }

  ngOnInit(){
    this.listingService.componentIndicate =this.sessionData.getData('currentIndicateList');
    this.currentList = this.listingService.componentIndicate;

  }




}
