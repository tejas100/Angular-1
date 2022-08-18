import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactusComponent } from './contactus/contactus.component';
import { HomeComponent } from './home/home.component';
import { PappointComponent } from './pappoint/pappoint.component';
import { VappointComponent } from './vappoint/vappoint.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'vappoint', component: VappointComponent },
  { path: 'pappoint', component: PappointComponent },
  { path: 'contactus', component: ContactusComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
