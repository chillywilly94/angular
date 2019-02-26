import { Component, OnInit } from '@angular/core';
import { preserveWhitespacesDefault } from '@angular/compiler';

@Component({
  selector: 'app-zadatak2',
  templateUrl: './zadatak2.component.html',
  styleUrls: ['./zadatak2.component.css']
})
export class Zadatak2Component implements OnInit {

  x: boolean = false;
  par: boolean = true;
  toggleNiz: number[] = [];
  public brojac: number = 0;
  

  constructor() { }

  ngOnInit() {
  }

  getBackgroundColor() {
    if(this.brojac>3){
      return "red";
    }
  }

  getTextColor() {
    if(this.brojac>3){
      return "white";
    }
  }

  toggle() {
    if(this.par === true){
      this.par = false;
    } else {
      this.par = true;
    }
    this.toggleNiz.push(this.brojac);
    this.brojac++;
    

  }

}
