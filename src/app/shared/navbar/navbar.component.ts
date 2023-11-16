import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { ModalService } from 'src/app/services/modals/modal.service';
import { SessionDataService } from 'src/app/services/session-data/session-data.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.sass']
})
export class NavbarComponent {



  isHomePage: Boolean;
  isNotFoundPage: Boolean;


  constructor(private router: Router, private modalService: ModalService, private sessionService: SessionDataService) {
    this.isHomePage = false;
    this.isNotFoundPage = true;
  }


  ngOnInit() {

    this.isNotFoundPage = this.sessionService.getData('currentUser') == null ? false : true;

    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.isHomePage = this.router.url.includes('home');
      }
    });
  }


  toggleUserModal(){
    this.modalService.toggleInfoUserModal();
  }

  toggleMenuModal(){
    this.modalService.toggleMenuModal();
  }


  redirectToHome(){
    this.router.navigateByUrl('/')
  }

}
