import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { Routes,RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { UserListComponent } from './user-list/user-list.component';
import { ChatbotComponent } from './chatbot/chatbot.component';
import { MoviesComponent } from './movies/movies.component';
import { CreateShowsComponent } from './create-shows/create-shows.component';

const routes: Routes = [
    { path: '', component: HomePageComponent },
    { path: 'signup', component: SignupComponent },
    { path: 'login', component: LoginComponent },
    { path: 'userlist', component: UserListComponent },
    { path: 'help', component: ChatbotComponent }, 
    { path: 'movies', component: MoviesComponent },
    { path: 'createshow', component: CreateShowsComponent },
  ];

  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
export class AppRoutingModule { }