import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModalService {



  showInfoUserModal$ = new BehaviorSubject<boolean>(false);
  showMenuModal$ = new BehaviorSubject<boolean>(false);
  showNewEnrollModal$ = new BehaviorSubject<boolean>(false);
  showEditModal$ = new BehaviorSubject<boolean>(false);
  showDeleteModal$ = new BehaviorSubject<boolean>(false);
  showDeleteEnrollModal$ = new BehaviorSubject<boolean>(false);

  constructor() { }

  toggleInfoUserModal() {
    this.showInfoUserModal$.next(!this.showInfoUserModal$.value);
  }

  toggleMenuModal() {
    this.showMenuModal$.next(!this.showMenuModal$.value);
  }

  toggleNewEnrollModal() {
    this.showNewEnrollModal$.next(!this.showNewEnrollModal$.value);
  }

  toggleEditModal() {
    this.showEditModal$.next(!this.showEditModal$.value);
  }

  toggleDeleteModal() {
    this.showDeleteModal$.next(!this.showDeleteModal$.value);
  }

  toggleDeleteEnrollModal() {
    this.showDeleteEnrollModal$.next(!this.showDeleteEnrollModal$.value);
  }

}
