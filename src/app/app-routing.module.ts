import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookingComponent } from './booking/BookingComponent';
import { BookingListComponent } from './booking-list/booking-list.component';
import { HomeComponent } from './home/home.component';
 
const routes: Routes = [
    { path: '', component: HomeComponent},
    { path: 'home', component: HomeComponent},
    { path: 'booking', component: BookingComponent },
    { path: 'booking-list', component: BookingListComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })

export class AppRoutingModule { }