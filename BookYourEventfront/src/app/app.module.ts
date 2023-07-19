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
import { LoginComponent } from './login/login.component'; // Import MatSnackBarModule

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    SignupComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, // Add FormsModule here
    HttpClientModule, // Add HttpClientModule here
    BrowserAnimationsModule, // Add BrowserAnimationsModule here
    MatSnackBarModule, // Add MatSnackBarModule here
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
