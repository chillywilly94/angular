import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";


import { AppComponent } from './app.component';
import { Zadatak1Component } from './zadatak1/zadatak1.component';
import { Zadatak2Component } from './zadatak2/zadatak2.component';
import { NgpComponent } from './ngp/ngp.component';

@NgModule({
  declarations: [
    AppComponent,
    Zadatak1Component,
    Zadatak2Component,
    NgpComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
