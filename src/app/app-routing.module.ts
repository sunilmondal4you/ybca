import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { CardDetailComponent } from './card-detail/card-detail.component';

const routes: Routes = [
  { path: '', redirectTo:'./login/login.component', pathMatch: 'full' },
  { path: 'login', component: LoginComponent,   pathMatch: 'full' },
  { path: 'home',  component: HomeComponent,    pathMatch: 'full' },
  { path: 'card-detail',  component: CardDetailComponent,    pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
