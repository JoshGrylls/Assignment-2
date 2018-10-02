import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  username:string;
  currentUser = JSON.parse(sessionStorage.getItem('currentUser'));

  constructor() { }

  ngOnInit() {

    this.username = this.currentUser["username"];

  }

}
