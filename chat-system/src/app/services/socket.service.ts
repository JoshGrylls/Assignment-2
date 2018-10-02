import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import * as io from 'socket.io-client';

@Injectable({
  providedIn: 'root'
})
export class SocketService {
  private url = "http//localhost:3000";
  private socket;
  constructor() { }
  sendMessage(message){
    this.socket.emit('add-message', message);
  }
  getMessage() {
    let obmessages = new Observable(
      //"observale" is a javascript function that defines the handelers for the
      //notifications that we will recieve
      observer => {
      this.socket = io();
      //listen for new-message event from the server
      this.socket.on('message', (data)=>{observer.next(data);});

      return ()=>{this.socket.disconnect();}
    })
    return obmessages;
  }
}
