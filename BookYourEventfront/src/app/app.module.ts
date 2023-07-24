// import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';
// import { FormsModule } from '@angular/forms';
// import {AppRoutingModule} from "./app-routing.module"

// import { AppComponent } from './app.component';
// import { HomePageComponent } from './home-page/home-page.component';
// import { SignupComponent } from './signup/signup.component';
// import { HttpClientModule } from '@angular/common/http';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // Import BrowserAnimationsModule
// import { MatSnackBarModule } from '@angular/material/snack-bar'; // Import MatSnackBarModule

// @NgModule({
//   declarations: [
//     AppComponent,
//     HomePageComponent,
//     BrowserAnimationsModule, 
//     SignupComponent,
//     MatSnackBarModule
//   ],
//   imports: [
//     BrowserModule,
//     AppRoutingModule,
//     FormsModule, // Add FormsModule here
//     HttpClientModule // Add HttpClientModule here
//   ],
//   providers: [],
//   bootstrap: [AppComponent]
// })
// export class AppModule { }


import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { SignupComponent } from './signup/signup.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // Import BrowserAnimationsModule
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { LoginComponent } from './login/login.component';
import { UserListComponent } from './user-list/user-list.component';
import { MatDialogModule } from '@angular/material/dialog';
import { UpdateUserDialogComponent } from './update-user-dialog/update-user-dialog.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { BackToTopComponent } from './back-to-top/back-to-top.component';
import { ChatbotComponent } from './chatbot/chatbot.component';
import { MoviesComponent } from './movies/movies.component';
import { CreateShowsComponent } from './create-shows/create-shows.component';
import { UpdateShowDialogComponent } from './update-show-dialog/update-show-dialog.component';
import { PaginationComponent } from './pagination/pagination.component';
import { AddMovieModalComponent } from './add-movie-modal/add-movie-modal.component';
import { ShowsComponent } from './shows/shows.component';
import { BookingsComponent } from './bookings/bookings.component';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    SignupComponent,
    LoginComponent,
    UserListComponent,
    UserListComponent,
    UpdateUserDialogComponent,
    NavbarComponent,
    FooterComponent,
    BackToTopComponent,
    ChatbotComponent,
    MoviesComponent,
    CreateShowsComponent,
    CreateShowsComponent,
    UpdateShowDialogComponent,
    PaginationComponent,
    AddMovieModalComponent,
    ShowsComponent,
    BookingsComponent,
    AdminPageComponent,
    AdminLoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, // Add FormsModule here
    HttpClientModule, // Add HttpClientModule here
    BrowserAnimationsModule, // Add BrowserAnimationsModule here
    MatSnackBarModule, // Add MatSnackBarModule here
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
