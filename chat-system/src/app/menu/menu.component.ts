import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HomeComponent } from '../home/home.component';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  loggedIn: boolean = false;
  constructor(private router: Router) { }

  ngOnInit() {
  }

  logout(){
    sessionStorage.clear();
    console.log('session cleared');
    this.router.navigateByUrl('');
  }

}
