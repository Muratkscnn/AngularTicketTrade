import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'TicketTrade';
  showLogin: boolean = false;
  showLoginFunc(event:boolean){
    this.showLogin = event;
  }

}
