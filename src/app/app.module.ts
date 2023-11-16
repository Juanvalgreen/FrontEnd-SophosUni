import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ReactiveFormsModule } from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from './components/components.module';
import { PagesModule } from './pages/pages.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { authReducer } from './state/auth/auth.reducer';

import { NavbarComponent } from './shared/navbar/navbar.component';
import { UserInfoModalComponent } from './shared/modals/user-info-modal/user-info-modal.component';
import { SharedModule } from './shared/shared.module';

import { LoadingInterceptor } from './services/loading-interceptor/loading-interceptor.service';



@NgModule({
  declarations: [
    AppComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule,
    ComponentsModule,
    PagesModule,
    SharedModule,
    StoreModule.forRoot({auth: authReducer}, {}),
    EffectsModule.forRoot([])
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: LoadingInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
