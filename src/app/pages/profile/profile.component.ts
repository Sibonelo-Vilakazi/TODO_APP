
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  constructor( private router : Router, private authService: AuthService) { }
  userData : any = {};
  ngOnInit(): void {
  }

  logout(){
    this.authService.logout();
    this.router.navigateByUrl('login')
  }

}
