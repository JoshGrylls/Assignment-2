import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  loggedIn: boolean;
  loggedOut: boolean;
  usrName: string;
  usrPsw: string;

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    //sessionStorage.setItem("loggedIn", "true");
    //sessionStorage.setItem("currentUser", JSON.stringify(currentUser));
  }

}
