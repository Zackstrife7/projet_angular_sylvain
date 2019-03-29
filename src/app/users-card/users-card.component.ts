import { Component, OnInit, Input } from '@angular/core';
import { User } from '../models/user';

@Component({
  selector: 'app-users-card',
  templateUrl: './users-card.component.html',
  styleUrls: ['./users-card.component.css']
})
export class UsersCardComponent implements OnInit {

  @Input() currentUser: User;
  constructor() { }

  ngOnInit() {
  }

}
