import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { User } from './models/user';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthService implements CanActivate{

   _token : string;
  private _currentUser: User;
  constructor(private _httpclient: HttpClient, private router : Router) {
    // localStorage.setitem('token',this._token);
  }
   canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot):boolean{
      if(!this._token){
        this.router.navigate(['/login'])
      }
      return true;
   }
   // dans le log 
   login(formLogin: { email: string, password: string }): Observable<boolean> {
     return new Observable(
       observer => {
         this._httpclient.post("http://localhost:3000/login", formLogin).subscribe(
           (result: { accessToken: string }) => {
             this._token = result.accessToken;
           
             this._httpclient.get("http://localhost:3000/users?email="+formLogin.email).subscribe(
               (users:User[]) => {
                 this._currentUser= users[0];
               }
             )
             observer.next(true);
             observer.complete();
           },
           err => observer.error(err)
         )
       })
   } 
   refreshUser(){
     const userInfosStored = localStorage.getItem('userInfos');
     if(userInfosStored) {
       const userInfos = JSON.parse(userInfosStored); 
       this._token = userInfos.token ;
      //  this.refreshUser(userInfos.email);
       
      }  
    }
  signup(user:{ firstname:string;
      lastname: string;
  avatar:string;
  email: string;
  password : string}): Observable<boolean>{
    return new Observable(
      observer =>{
        this._httpclient.post("http://localhost:3000/register",user).subscribe(
          () =>{
            observer.next(true);
            observer.complete;
          }
          )
        }
      )
   }
          
  get token(){
    return this._token;
  }
  get currrentUser(){
    return this._currentUser;
  }
  upload(fileToUpload: any) {
    let input = new FormData();
    input.append("file", fileToUpload);

    return this._httpclient.post("/api/uploadFile", input);
}


  
}
