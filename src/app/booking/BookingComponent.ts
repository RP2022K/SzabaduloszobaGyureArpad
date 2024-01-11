import { Component} from '@angular/core';
import { DatePipe } from '@angular/common';


@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent {

  formData = {
    nev: '',
    fo: 'személyek száma',
    datum: '',
    cim: ''
  }
  submitted: boolean = false;

  onSubmit(){
    this.submitted = true;
  }

  constructor(private datePipe: DatePipe){}

  valueDate = this.datePipe.transform(Date(),"yyyy-MM-dd");

  
  
}
