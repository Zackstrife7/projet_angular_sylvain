import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from '../message.service';
import { Message } from '../models/message';
import { UsersManagerService } from '../users-manager.service';
import { User } from '../models/user';
import { Conversation } from '../models/conversation';
import { MatSnackBar } from '@angular/material';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-send-message',
  templateUrl: './app-send-message.component.html',
  styleUrls: ['./app-send-message.component.css']
})
export class AppSendMessageComponent implements OnInit {
  
  @Input() conversation : number;
  @Output() messagePosted : EventEmitter<null> = new EventEmitter()
  
  
  form : FormGroup;
  message: Message;
  user: User ;
  conv: Conversation;
  constructor(private formBuilder: FormBuilder, private activatedRoute: ActivatedRoute,private snackBar: MatSnackBar,private _router: Router
    ,private _sendMess: MessageService,private _authService: AuthService,) {
    

    }
    ngOnInit() {
      this.form = this.formBuilder.group({
        text:["",Validators.required],
        sender:{name: this._authService.currrentUser.firstname,avatar:this._authService.currrentUser.avatar},
        conversationId: +this.conversation,
        userId: this._authService.currrentUser.id
      })
    }
    
    public sendMessage(){
      this.message = this.form.value;
      this._sendMess.sendMessage(this.message).subscribe(
        results =>{
          this.messagePosted.emit(null);
          this.snackBar.open("Votre message a bien été envoyé ", 'OK', {
            duration: 5000,
          })
        }

  
      )
    }


}
