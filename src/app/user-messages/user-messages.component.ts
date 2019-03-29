import { Component, OnInit, Input } from '@angular/core';
import { User } from '../models/user';
import { Message } from '../models/message';
import { MessageService } from '../message.service';
import { MessagesManagerService } from '../messages-manager.service';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-user-messages',
  templateUrl: './user-messages.component.html',
  styleUrls: ['./user-messages.component.css']
})
export class UserMessagesComponent {
   userid : number;
  messages : Message[];
  _token :string;
  constructor(private messageService: MessagesManagerService,private activatedRoute: ActivatedRoute,private authService :AuthService) { 
    this.activatedRoute.params.subscribe(
      params => {
        this.userid = params.userid;
  
      }
    )
    this.messageService.findMessagesByUser(this.userid).subscribe(
      (user: User) => {
        
        this.messages = user.messages;
        
      }
    )
  }


}
