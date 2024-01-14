import { Component, OnInit } from '@angular/core';
import { BookingService } from '../booking.service';

@Component({
  selector: 'booking-list',
  templateUrl: './booking-list.component.html',
  styleUrls: ['./booking-list.component.css']
})

export class BookingListComponent {
  foglalasok: any;
  errorMessage = "";
  isError = false;

  constructor(private service: BookingService) {
    this.service.getReservations().subscribe({
      next: (res) => {
        this.foglalasok = res;
        this.isError = false;
      },
      error: (err) => {
        this.errorMessage = err.message;
        this.isError = true;
      }
    })

  }
  

}