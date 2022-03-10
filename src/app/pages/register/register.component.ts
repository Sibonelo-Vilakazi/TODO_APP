import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  showPassword : boolean = false;
  showConfirmPassword : boolean = false
  constructor(private router : Router) { }

  ngOnInit(): void {
  }

  handlePasswordVisibility(){
    this.showPassword = !this.showPassword;
  }

  handleConfirmPasswordVisibility(){
    this.showConfirmPassword = ! this.showConfirmPassword;
  }
  redirectToLogin(){
      this.router.navigateByUrl('login')
  }
}
