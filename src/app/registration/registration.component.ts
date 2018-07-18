import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  form : FormGroup;
  private formSubmitAttempt: boolean;

  constructor(private fb : FormBuilder, private auth : LoginService) {
    
   }

   isFieldInvalid(field: string) { // {6}
    return (
      (!this.form.get(field).valid && this.form.get(field).touched) ||
      (this.form.get(field).untouched && this.formSubmitAttempt)
    );
  }

  ngOnInit() {
    this.form = this.fb.group({     // {5}
      userName: ['', Validators.required],
      password: ['', Validators.required],
      email: ['', Validators.required],
      contact: ['', Validators.required],
    });
  }

  login()
  {
    if (this.form.valid) {

      //this.authService.setUsername(this.form.value.userName);
      console.log('Hello');
    }
    this.formSubmitAttempt = true;    
  }

  backToLogin()
  {
    this.auth.login();
  }
}
