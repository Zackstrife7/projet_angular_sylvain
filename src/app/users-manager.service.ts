import { Injectable } from '@angular/core';
import { User } from './models/user';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersManagerService {
 
  private _users: User[];
// dnas le service on importe l'http
  constructor(private http: HttpClient) {  }
    findUsers(): Observable<User[]>{
      return this.http.get<User[]>('http://localhost:3000/users')
    }
 

  public getUser(id: number){
    return this._users[id]; 
  }
  public getUserList() {
    return this._users;
  }
  public updateUser(modifiedUser: User){
   return  this.http.put('http://localhost:3000/users/' + modifiedUser.id,modifiedUser);
  }
  public findUser(currentUserId: number): any {
    return this.http.get<User>('http://localhost:3000/users/' + currentUserId);
  }
}
