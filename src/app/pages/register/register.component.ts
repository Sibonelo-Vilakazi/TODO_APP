import { Component, OnInit } from '@angular/core';
import { FormControl, FormControlName, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  showPassword : boolean = false;
  showConfirmPassword : boolean = false;
  errorMessage: string ='';
  registerForm: FormGroup = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('',Validators.required),
    confirmPassword: new FormControl('',Validators.required)
  })
  
  constructor(private router : Router, private authService: AuthService) { }

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

  registerHandler(){
    this.errorMessage = '';
    let obj ={
      username: this.registerForm.value.username,
      password: this.registerForm.value.password
    }
    this.authService.userRegister(obj).subscribe((res: any) =>{
      console.log(res);

      this.router.navigateByUrl('login')
    },(err: any) =>{
      this.errorMessage = err.error || err.text;
      console.log(err)
    })
    
  }
}
