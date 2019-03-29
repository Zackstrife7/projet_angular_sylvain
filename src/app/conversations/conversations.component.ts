import { Component, OnInit, Input, Output } from '@angular/core';
import { Conversation } from '../models/conversation';
import { Message } from '../models/message';
import { ConvManagerService } from '../conv-manager.service';
import { ActivatedRoute } from '@angular/router';
import { EventEmitter } from 'events';

@Component({
  selector: 'app-conversations',
  templateUrl: './conversations.component.html',
  styleUrls: ['./conversations.component.css']
})
export class ConversationsComponent  {

  // conversations :Conversation[];

  convid : number;
  messages : Message[];
  convname : string;
  
  
  displayedColumns :string[] =["avatar","name","texte"]
  constructor(private convService: ConvManagerService, private activatedRoute: ActivatedRoute) { 
    this.activatedRoute.params.subscribe(
      params => {
        this.convid = params.convid;
        this.convname = params.convname;
        this.refreshMessages();
      }
    )
  }

  refreshMessages() {
    this.convService.findMessagesByConv(this.convid).subscribe(
      (conv:Conversation) => {
        
        this.messages = conv.messages;
        
      }
    )
  }

}
