import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersListComponent } from './users-list/users-list.component';
import { Route, RouterModule } from '@angular/router';
import { UsersCardComponent } from './users-card/users-card.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatMenuModule,MatButtonModule,MatIconModule,MatCardModule,MatInputModule, MatSnackBarModule, MatTableModule, MatListModule,MatPaginatorModule} from '@angular/material';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AuthInterceptor } from './auth.interceptor';
import { UsersEditComponent } from './users-edit/users-edit.component';
import { UsersInscriptionComponent } from './users-inscription/users-inscription.component';
import { ConversationsComponent } from './conversations/conversations.component';
import { ConvListComponent } from './conv-list/conv-list.component';
import { AppSendMessageComponent } from './app-send-message/app-send-message.component';
import { UserMessagesComponent } from './user-messages/user-messages.component';




const routes: Route[] = [
  {
    path: 'users',
    component: UsersListComponent,
  },
  {
    path:'login',
    component: LoginComponent
  },
  {
    path:'users/:userid/edit',
    component: UsersEditComponent
  },
  {
    path:'inscription',
    component: UsersInscriptionComponent  
  },
  {
    path:'conversations/:convid',
    component:ConversationsComponent
  },
  {
    path:'users/:userid/messages',
    component: UserMessagesComponent
  }
  

]
@NgModule({
  declarations: [
    AppComponent,
    UsersListComponent,
    UsersCardComponent,
    LoginComponent,
    UsersEditComponent,
    UsersInscriptionComponent,
    ConversationsComponent,
    ConvListComponent,
    AppSendMessageComponent,
    UserMessagesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatButtonModule,
    HttpClientModule,
    MatIconModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule,
    MatCardModule,
    MatInputModule,
    MatSnackBarModule,
    FormsModule,
    MatTableModule,
    MatPaginatorModule,
    MatListModule
 
    
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor, multi: true}
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
