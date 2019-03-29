import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {

  // creation d'un form bind
  form: FormGroup;

  constructor(private formBuilder: FormBuilder, private authService: AuthService, private router: Router, private snackBar: MatSnackBar) {
    this.form = formBuilder.group({
      // creation de 2 contorle pour email et pw
      email: ["", Validators.email],
      password: ["", Validators.required]
    })
  }
  login() {
    if (this.form.valid) {
      this.authService.login(this.form.value).subscribe(
        loginSucess => {
          this.router.navigate(['/']),
          this.snackBar.open("Authentification réussie", 'OK', {
            duration: 5000,
          })
        }, loginError => {
          this.snackBar.open("Authentification échouée", 'OK', {
            duration: 5000,
          })
        }
      )
    }
  }


}
