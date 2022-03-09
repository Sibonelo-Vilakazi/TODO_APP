import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  showPassword : boolean = false;
  showConfirmPassword : boolean = false
  constructor() { }

  ngOnInit(): void {
  }

  handlePasswordVisibility(){
    this.showPassword = !this.showPassword;
  }

  handleConfirmPasswordVisibility(){
    this.showConfirmPassword = ! this.showConfirmPassword;
  }
}
