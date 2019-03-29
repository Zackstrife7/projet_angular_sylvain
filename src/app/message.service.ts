import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Message } from './models/message';
import { User } from './models/user';
import { Conversation } from './models/conversation';

@Injectable({
  providedIn: 'root'
})
export class MessageService {


  private _currentMessage: Message;
  private _currentConv: Conversation;
private messages :Message[];
  constructor(private _httpclient: HttpClient) {

  }
  public sendMessage(message: Message) {
    return this._httpclient.post("http://localhost:3000/messages", message);
    
  }
  get currentConv(){
   return this._currentConv;
  }
  public getMessages(){
    return this.messages;
  }

}

