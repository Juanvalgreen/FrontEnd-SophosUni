import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ListingService } from 'src/app/services/listing/listing.service';
import { ModalService } from 'src/app/services/modals/modal.service';
import { SessionDataService } from 'src/app/services/session-data/session-data.service';

@Component({
  selector: 'app-menu-modal',
  templateUrl: './menu-modal.component.html',
  styleUrls: ['./menu-modal.component.sass']
})
export class MenuModalComponent {

  constructor(private modalService: ModalService, private router:Router, private listingService: ListingService,private sessionData: SessionDataService){

  }



  closeModal(){
    this.modalService.toggleMenuModal();
  }

  redirectToList(indicateList: string){

    if(indicateList == 'home'){
      this.modalService.toggleMenuModal();
      this.router.navigateByUrl('/home');
    }else{
      this.listingService.componentIndicate = indicateList;
      this.sessionData.storeData('currentIndicateList',indicateList);
      this.modalService.toggleMenuModal();

      this.router.navigateByUrl('/home', { skipLocationChange: true }).then(() => {
        this.router.navigate(['/list']);
      });

    }

  }


}
