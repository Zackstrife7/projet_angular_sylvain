import { Injectable } from '@angular/core';
import { Conversation } from './models/conversation';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { User } from './models/user';
@Injectable({
  providedIn: 'root'
})
export class ConvService {
  private _currentConv: Conversation;
  constructor(private _httpclient: HttpClient) {

   }
   get currentConv(){
    return this._currentConv;
  }

}
