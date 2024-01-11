import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

const baseUrl = 'http://localhost:3000/foglalasok';

@Injectable({
  providedIn: 'root'
})

export class BookinglistService {

  constructor( private httpClient: HttpClient ) {}

  getFoglalasok() {
    return this.httpClient.get(baseUrl);
  }

  readAll(): Observable<any> {
    return this.httpClient.get(baseUrl);
  }

  getReservations(): Observable<any[]> {
    return this.httpClient.get<any[]>(baseUrl)
      .pipe(
        map((reservations: any[]) => {
          return reservations.sort((a, b) => new Date(b.datum).getTime() - new Date(a.datum).getTime());
        })
      );
  }

  
}
