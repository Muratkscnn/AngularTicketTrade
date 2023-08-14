import {Component, DoCheck} from '@angular/core';

@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.scss']
})
export class EventDetailComponent implements DoCheck{
email : string ='';
emailValid : boolean = false;
  goBack() {
    return window.history.back();
  }
ngDoCheck(){
    var emailSplitArray = this.email.split(".");
  this.emailValid = this.email.includes("@") && this.email.includes(".") && emailSplitArray[1].length >= 2

  }
  onsubmit(formValue: any) {
    // Handle form submission logic here
    console.log(formValue);
  }
}
