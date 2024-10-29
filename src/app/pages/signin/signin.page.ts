// src/app/pages/signin/signin.page.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.page.html',
  styleUrls: ['./signin.page.scss'],
})
export class SigninPage {
  email: string = ''; // Define with initial values
  password: string = ''; // Define with initial values

  // Define the login method
  login() {
    console.log('Login button clicked');
    // Add login functionality here
  }
}
