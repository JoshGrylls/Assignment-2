import { Component, OnInit } from '@angular/core';
import { SocketService } from '../services/socket.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-chatroom',
  templateUrl: './chatroom.component.html',
  styleUrls: ['./chatroom.component.css']
})
export class ChatroomComponent implements OnInit {
  username:string;
  messages=[];
  message;
  connection;
  constructor(private sockServ: SocketService, private router: Router) { }

  ngOnInit() {
    //We have to validate the username. Subscribe to chat service. add a message
    //to the message array each time you are pushed a message from the server
    this.username = sessionStorage.getItem('username');
    console.log("Session started for: " + this.username);
    this.connection = this.sockServ.getMessage().subscribe(message =>{
      //"message" is value of input field.
      this.messages.push(message);
      this.message =  '';
    });
  }

  sendMessage() {
    //send a chat message back to the server.
    this.sockServ.sendMessage(this.message + ' ('+this.username+')');
    //this.message = '';
  }

  ngOnDestroy() {
    //When leaving this component close down the subscription
    if(this.connection) {
      this.connection.unsubscribe();
    }
  }

  logout(){
    sessionStorage.clear();
    console.log('session cleared');
    this.router.navigateByUrl('');
  }
}
