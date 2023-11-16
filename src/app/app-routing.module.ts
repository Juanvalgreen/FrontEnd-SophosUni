import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { ListncreateComponent } from './pages/listncreate/listncreate.component';
import { DetailComponent } from './pages/detail/detail.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { authGuard } from './guards/auth.guard';
import { inAuthGuard } from './guards/in-auth.guard';

const routes: Routes = [
  {path: '', redirectTo:'login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent, canActivate: [inAuthGuard]},
  {path: 'home', component: HomeComponent, canMatch: [authGuard]},
  {path: 'list', component: ListncreateComponent, canMatch: [authGuard]},
  {path: 'details', component: DetailComponent, canMatch: [authGuard]},
  {path: "**", component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
