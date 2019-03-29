import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { UsersManagerService } from '../users-manager.service';


@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {
  //liste des personnages de l'appication
  public users: User[];

  constructor(private userService: UsersManagerService) { }

  ngOnInit() {
    this.userService.findUsers().subscribe(
      (users: User[]) => {
        this.users = users
      }
    )
  }

}
