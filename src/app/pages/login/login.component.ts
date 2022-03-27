import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private router : Router) { }
  showPassword : boolean = false;
  ngOnInit(): void {
  }

  handlePasswordVisibility(){
    this.showPassword = !this.showPassword;
  }

  redirectToRegister(){
      this.router.navigateByUrl('register')
  }

  loginSubmit(){
    this.router.navigateByUrl('')
  }
}
