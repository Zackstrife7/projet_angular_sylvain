import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';
import { ConvService } from './conv.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {

  // on insere une varibale objet du service pour attraper l'authentification en cour et le user concerné
  constructor(private authService: AuthService, private convService: ConvService){
     
  }
  
  get currentUser(){
    return this.authService.currrentUser;
  }
  get conversation(){
    return this.convService.currentConv;

  }
  // title = 'projet-conv-jv';
}
