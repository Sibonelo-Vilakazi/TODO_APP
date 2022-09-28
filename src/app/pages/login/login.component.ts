import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private router : Router, private authService: AuthService) { }
  showPassword : boolean = false;
  loginForm: FormGroup= new FormGroup({
    username: new  FormControl('', Validators.required),
    password: new FormControl('',Validators.required)
  })
  errorMessage: string =''
  ngOnInit(): void {
  }

  handlePasswordVisibility(){
    this.showPassword = !this.showPassword;
  }

  redirectToRegister(){
      this.router.navigateByUrl('register')
  }

  loginSubmit(){
    this.errorMessage = '';
    this.authService.userLogin(this.loginForm.value).subscribe((res: any) =>{
      localStorage.setItem(this.authService.tokenName, res.token);
      this.router.navigateByUrl('');
    }, (error: any) =>{
        this.errorMessage = error.error;
        console.log(error.error);
    })
  
    //this.router.navigateByUrl('')
  }
}
