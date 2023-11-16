import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import { UserInfoModalComponent } from './modals/user-info-modal/user-info-modal.component';
import { MenuModalComponent } from './modals/menu-modal/menu-modal.component';
import { DeleteModalComponent } from './modals/delete-modal/delete-modal.component';
import { EditModalComponent } from './modals/edit-modal/edit-modal.component';
import { AddEnrollModalComponent } from './modals/add-enroll-modal/add-enroll-modal.component';
import { DeleteEnrollModalComponent } from './modals/delete-enroll-modal/delete-enroll-modal/delete-enroll-modal.component';
import { LoaderComponent } from './loader/loader.component';



@NgModule({
  declarations: [
    NavbarComponent,
    UserInfoModalComponent,
    MenuModalComponent,
    DeleteModalComponent,
    EditModalComponent,
    AddEnrollModalComponent,
    DeleteEnrollModalComponent,
    LoaderComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    NavbarComponent,
    UserInfoModalComponent,
    MenuModalComponent,
    DeleteModalComponent,
    EditModalComponent,
    AddEnrollModalComponent,
    DeleteEnrollModalComponent,
    LoaderComponent

  ]
})
export class SharedModule { }
