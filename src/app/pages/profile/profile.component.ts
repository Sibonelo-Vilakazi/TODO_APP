import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  constructor(private authService : AuthService , private router : Router) { }
  userData : any = {};
  ngOnInit(): void {

    this.authService.getUserData('user').subscribe(( user : any) => {
      this.userData = user;

    }, (error : any) => {
      console.log(error);
    })
  }

  logout(){
    this.router.navigateByUrl('login')
  }

}
