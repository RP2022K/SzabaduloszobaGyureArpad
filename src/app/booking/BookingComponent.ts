import { Component} from '@angular/core';
import { DatePipe } from '@angular/common';
import { BookingService } from '../booking.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export default class BookingComponen {

  submitted: boolean = false;

  baseUrl = 'http://localhost:3000/foglalasok';
  data: any;
  document: any;

  valueId = "";
  valueName = "Név";
  valueFo = "Csapat létszáma";
  valueDate = this.datePipe.transform(Date(),"yyyy-MM-dd");
  valueCim = "Cím";
  valueIrszam = "Irányítószám";

  onSubmit(data: any){
    this.submitted = true;

    this.http.post(this.baseUrl, data).subscribe((result)=>{
      console.warn(result);
      
    })

    }
  
    
  constructor(private datePipe: DatePipe,
              private http: HttpClient,
              private booking: BookingService
              ){}
  

              

  }