import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromAuth from '../../../state/auth/auth.reducer'
import { selectMail } from 'src/app/state/auth/auth.reducer';
import { ModalService } from 'src/app/services/modals/modal.service';
import { Router } from '@angular/router';
import { SessionDataService } from 'src/app/services/session-data/session-data.service';

@Component({
  selector: 'app-user-info-modal',
  templateUrl: './user-info-modal.component.html',
  styleUrls: ['./user-info-modal.component.sass']
})
export class UserInfoModalComponent {

  currentUserMail: string | undefined;

  constructor(private store: Store, private modalService: ModalService, private router: Router, private sessionData: SessionDataService){

  }


  ngOnInit(){
    this.store.select(fromAuth.selectMail).subscribe(userMail => {
      this.currentUserMail = userMail;
      console.log(this.currentUserMail);
    });

  }

  closeModal(){
    this.modalService.toggleInfoUserModal();
  }
  logOut(){

    this.sessionData.removeData('currentIndicateList');
    this.sessionData.removeData('currentDetailsData');
    this.sessionData.removeData('currentUser');
    this.modalService.toggleInfoUserModal();

    this.router.navigateByUrl('/login')

  }


}
