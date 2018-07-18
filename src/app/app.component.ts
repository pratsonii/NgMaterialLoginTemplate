import { Observable } from 'rxjs';
import { Component } from '@angular/core';
import { LoginService } from './login.service';
import { trigger, style, transition, animate, group } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
  trigger('flyInOut', [
    transition(':enter', [
      style({transform: 'translateX(-100%)'}),
      animate(350)
    ])
  ]),

  trigger('flyOutIn', [
    transition(':enter', [
      style({transform: 'translateX(100%)'}),
      animate(350)
    ])
  ])
]
})
export class AppComponent {
  title = 'app';
  isLoggedIn : Observable<boolean> ;

  constructor(private authServ : LoginService)
  {
    this.isLoggedIn = this.authServ.isLoggedIn();
    this.authServ.login();
    this.authServ.isLoggedIn().subscribe(x => console.log(x));
  }
}
