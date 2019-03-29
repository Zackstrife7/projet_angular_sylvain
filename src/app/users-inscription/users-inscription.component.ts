import { Component, OnInit, ViewChild } from '@angular/core';
import { UsersManagerService } from '../users-manager.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { User } from '../models/user';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-users-inscription',
  templateUrl: './users-inscription.component.html',
  styleUrls: ['./users-inscription.component.css']
})
export class UsersInscriptionComponent   {

  formulaire: FormGroup;
  user : User;
  constructor(private formBuilder: FormBuilder, private _activatedRoute: ActivatedRoute,private snackBar: MatSnackBar,private _router: Router
    ,private _userAuth: AuthService){
      this.formulaire = this.formBuilder.group({
        // creation de 2 contorle pour email et pw
        firstname: ["", Validators.required],
        lastname: ["", Validators.required],
        avatar: ["",Validators.required],       
        email: ["", Validators.email],
        password: ["", Validators.required]
      })
  }

  public signup(){
    //tis user est undefined 
    this.user = this.formulaire.value
    this._userAuth.signup(this.user).subscribe(
      results =>{
        this._router.navigate(['/']);
        this.snackBar.open("Bienvenue "+this.user.firstname, 'OK', {
          duration: 5000,
        })
      }

    )
  }



}
