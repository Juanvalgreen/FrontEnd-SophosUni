import { Component } from '@angular/core';
import { DetailsDataService } from 'src/app/services/details-data/details-data.service';
import { EnrollmentsService } from 'src/app/services/enrollments/enrollments.service';
import { ModalService } from 'src/app/services/modals/modal.service';
import { SessionDataService } from 'src/app/services/session-data/session-data.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.sass']
})
export class DetailComponent {

  currentDetailObject: any;

  amountCurrentEnrolls: number =0;

  constructor(private detailService: DetailsDataService, private sessionData: SessionDataService, private modalService:ModalService, private enrollService: EnrollmentsService) {

  }




  ngOnInit(){


    let currentData = this.sessionData.getData('currentDetailsData');

    if( currentData != null){
      this.currentDetailObject = currentData;
      this.detailService.detailsData = currentData;
    }

    this.detailService.amountEnrolls.subscribe(
      value =>{
        this.amountCurrentEnrolls = value;
      }
    )

  }

  openDeleteModal(){

    this.modalService.toggleDeleteModal();

  }

  openEditModal(){
    this.modalService.toggleEditModal();
  }



}
