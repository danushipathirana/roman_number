import { Component } from '@angular/core';
import { RomanNumber } from './roman-number';
import { interval } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Roman Number to Numeric Number'

  romanModel = new RomanNumber('');

  public answer:number|undefined;

  submit= (roam:string)=>{

let romnum = new Map([["I",1],["V",5],["X",10],["L",50],["C",100],["D",500],["M",1000]])
 
let letters =roam.length;
var i;
let sum =0;
 
for(i=0;i<letters;i++){
 
console.log("S[i value]"+roam[i]);

if(i>0 && i == (letters-1) && roam[i]==='V'){
    sum = sum+3;
}else if(i>0 && i == (letters-1) && roam[i]==='X'){
    sum = sum+8;
}else{
 
const value = romnum.get(roam[i]);
 
console.log("keyvalue"+value)
 
if(value){

sum=sum+value;
}
}
}
console.log(sum)
this.answer = sum;

alert("Your Answer is: "+this.answer)

}

  }


