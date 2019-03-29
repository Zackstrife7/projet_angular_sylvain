import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersManagerService } from '../users-manager.service';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import { MatSnackBar } from '@angular/material';
@Component({
  selector: 'app-users-edit',
  templateUrl: './users-edit.component.html',
  styleUrls: ['./users-edit.component.css']
})
export class UsersEditComponent implements OnInit {
  currentUserId: number;
  currentUser: User;

  routeSub: Subscription;

  formulaire: FormGroup;
  constructor(
    private _activatedRoute: ActivatedRoute,
    private _router: Router,
    private _userManager: UsersManagerService,
    private _fb: FormBuilder,
    private snackBar: MatSnackBar
  ) { 
    this.routeSub = this._activatedRoute.params.subscribe((resultat) => {
      this.currentUserId = resultat.userid;
      this._userManager.findUser(this.currentUserId).subscribe(
            user => {
              // formulaire assigné
              this.currentUser= user;
              this.formulaire = this._fb.group({
                firstname: this._fb.control(this.currentUser.firstname),
                lastname: this._fb.control(this.currentUser.lastname),
                email: this._fb.control(this.currentUser.email, [])
              });
            }
        )
    }
    );
  }

  ngOnInit() {

  }
  updateUser() {
    const userEdited = Object.assign({},this.currentUser)
    userEdited.firstname = this.formulaire.get('firstname').value;
    userEdited.lastname = this.formulaire.get('lastname').value;
    userEdited.email = this.formulaire.get('email').value;
    this._userManager.updateUser(userEdited).subscribe(
      results =>{
        this._router.navigate(['/'])
          this.snackBar.open("Votre profil a bien été mis à jour ", 'OK', {
            duration: 5000,
          })

      }
    )
  }
  // get oneuser(){
  //   return this.formulaire.get("http://localhost:4200/users/"+this.currentUserId);
  // }
}
