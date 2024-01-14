import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, map, of } from 'rxjs';
import { NgForm } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  baseUrl = "http://localhost:3000/foglalasok";

  constructor(private http: HttpClient) { }

  getReservations(): Observable<any[]> {
    return this.http.get<any[]>(this.baseUrl)
      .pipe(
        map((reservations: any[]) => {
          return reservations.sort((a, b) => new Date(b.datum).getTime() - new Date(a.datum).getTime());
        })
      );

      }

  onSubmit(data: any): Observable<any> {
    
    return this.http.post(`${this.baseUrl}/post`, data)
}

  clearCart(){
  
  }

  
}
