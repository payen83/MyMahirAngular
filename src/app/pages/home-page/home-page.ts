import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Toolbar } from '../../components/toolbar/toolbar';

@Component({
  selector: 'app-home-page',
  imports: [FormsModule, Toolbar],
  standalone: true,
  templateUrl: './home-page.html',
  styleUrl: './home-page.scss',
})
export class HomePage {

  myName: String;
  textInput: String;

  constructor(){
    this.myName = 'Ali';
    this.textInput = '';
  }

  changeName(){
    this.myName = this.textInput;
  }

  btnClick(){
    let length: number = 7;
    let width: number = 3;
    if(length > 9){
      console.log('Length:', length);
      console.log('Width:', width); 
      console.log('The area is = ', calculateArea(length, width));
    } else {
      console.log('Length is less than 10');
    }

    function calculateArea(length: number, width: number){
      return length * width;
    }
  }

  btnArray(){
    var cars: Array<string> = ["Proton", "Perodua", "Kia"];
    console.log('All cars in array:', cars);
    console.log('Cars index 2', cars[2]);

    cars[1] = "BMW";
    console.log('New car listing: ', cars);

    cars.push("Mitsubishi");
    cars.unshift("Honda");
    console.log('Latest car listing after push: ', cars);

    for(let i=0; i < cars.length; i++){
      console.log("I love ", cars[i]);
    }

    for(let car of cars){
      console.log("I prefer to drive ", car);
    }

  }
}
