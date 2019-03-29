import { Injectable } from '@angular/core';
import { Message } from './models/message';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ConvManagerService } from './conv-manager.service';
import { User } from './models/user';

@Injectable({
  providedIn: 'root'
})
export class MessagesManagerService {

  private _currentMessage: Message;
  private messages :Message[];
  private user :User;
    constructor(private http: HttpClient) {
     
    }
    findMessagesByUser(userid : number): Observable<User>{
      return this.http.get<User>('http://localhost:3000/users/'+userid+'?_embed=messages')
     }
    public getMessages(){
      return this.messages;
    }

}
