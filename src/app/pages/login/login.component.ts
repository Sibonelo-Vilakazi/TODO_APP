import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor() { }
  showPassword : boolean = false;
  ngOnInit(): void {
  }

  handlePasswordVisibility(){
    this.showPassword = !this.showPassword;
  }
}
