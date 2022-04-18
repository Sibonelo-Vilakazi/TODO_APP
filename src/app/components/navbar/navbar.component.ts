import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  showNavBar(){
   return !(window.location.href.includes("login")) &&
        !(window.location.href.includes("register"))

  
  }

  showSettings(){
    return window.location.pathname.split('/')[1]=='';
  }

  showEdit(){
    return window.location.pathname.split('/')[1]=='details';

  }

  showDelete(){
    return window.location.pathname.split('/')[1]=='details' || window.location.pathname.split('/')[1]=='edit';
  }

}
