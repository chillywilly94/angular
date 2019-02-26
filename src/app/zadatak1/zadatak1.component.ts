import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-zadatak1',
  templateUrl: './zadatak1.component.html',
  styleUrls: ['./zadatak1.component.css']
})
export class Zadatak1Component implements OnInit {

  reset: boolean = true;
  userName: string = "";


  constructor() { }

  ngOnInit() {
  }

  inputName(event: Event){
    this.userName = (<HTMLInputElement>event.target).value;
    if(this.userName !== ""){
      this.reset = false;
    } else {
      this.reset = true;
    }
  }

  resetUser(){
    this.userName = "";
    this.reset = true;
  }

}
