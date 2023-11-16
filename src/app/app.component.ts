import { Component } from '@angular/core';
import { Router,NavigationEnd } from '@angular/router';
import { Store } from '@ngrx/store';
import * as AuthActions from './state/auth/auth.actions'
import { SessionDataService } from './services/session-data/session-data.service';
import { CurrentUser } from './models/currentUser.model';
import { ModalService } from './services/modals/modal.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'Sophos University';


  isLoginPage: Boolean;
  showInfoUserModal: boolean = false;
  showMenuModal: boolean = false;
  showNewEnrollModal: boolean = false;
  showEditModal: boolean = false
  showDeleteModal: boolean = false;
  showDeleteEnrollModal: boolean = false;


  constructor(private router: Router, private store:Store, private sessionData:SessionDataService, private modalService: ModalService) {
    this.isLoginPage = false;
  }


  ngOnInit() {

    const currentUser: CurrentUser = this.sessionData.getData('currentUser');

    if(currentUser){

      this.store.dispatch(AuthActions.loginSuccess({currentUser}));

    }


    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.isLoginPage = this.router.url.includes('login');
      }
    });


    this.modalService.showInfoUserModal$.subscribe((value) => {
      this.showInfoUserModal = value;
    });

    this.modalService.showMenuModal$.subscribe((value) => {
      this.showMenuModal = value;
    });

    this.modalService.showDeleteModal$.subscribe((value) => {
      this.showDeleteModal = value;
    });

    this.modalService.showEditModal$.subscribe((value) => {
      this.showEditModal = value;
    });

    this.modalService.showNewEnrollModal$.subscribe((value) => {
      this.showNewEnrollModal = value;
    });

    this.modalService.showDeleteEnrollModal$.subscribe((value) => {
      this.showDeleteEnrollModal = value;
    });



  }




}
