import { Component, OnInit } from '@angular/core';
import { Conversation } from '../models/conversation';
import { ConvManagerService } from '../conv-manager.service';

@Component({
  selector: 'app-conv-list',
  templateUrl: './conv-list.component.html',
  styleUrls: ['./conv-list.component.css']
})
export class ConvListComponent implements OnInit {
 //liste des conversations de l'appication
 public conversations: Conversation[];


  constructor(private convService: ConvManagerService) { }

  ngOnInit() {
    this.convService.findConvs().subscribe(
      (conversations: Conversation[]) => {
        this.conversations = conversations
      }
    )
  }

}
