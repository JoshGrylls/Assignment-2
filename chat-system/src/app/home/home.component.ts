import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
declare var $: any;

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

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onSubmit() {
    console.log('loading...');
    var tryUser = {
      tryName: this.usrName,
      tryPassword: this.usrPsw
    };
    //sessionStorage.setItem("loggedIn", "true");
    $.post("/users", tryUser, (tryUser) => {
      if(tryUser.ok == true) {
        sessionStorage.setItem("currentUser", JSON.stringify({username:this.usrName,password:this.usrPsw}));
        this.router.navigate(['/account']);;
      } else {
        $("#loginResults").html('Invalid!');
      }
    });
  }

}
