import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }

  isLoginSubject = new BehaviorSubject<boolean>(true);

  login( ) :void {
    localStorage.setItem('token','JWT');
    this.isLoginSubject.next(true);
  }
  
  logout( ) :void {
    localStorage.removeItem('token');
     this.isLoginSubject.next(false);
  }
  
  isLoggedIn( ) : Observable<boolean> {
    return this.isLoginSubject.asObservable();
  }

  checkLogin(): boolean
  {
    return true;
  }
}
