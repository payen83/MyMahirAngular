import { Component } from '@angular/core';
import { SharedModules } from '../../shared/shared-modules';

@Component({
  selector: 'app-directive-page',
  imports: [...SharedModules],
  templateUrl: './directive-page.html',
  styleUrl: './directive-page.scss',
})
export class DirectivePage {
  public showListCars: boolean = true;
  public cars = [
    {name: "Proton", description: "Made in Malaysia", origin: "Malaysia"},
    {name: "Perodua", description: "Cheapest in Market", origin: "Malaysia"},
    {name: "Honda", description: "Best in Performance", origin: "Japan"},
    {name: "Ford", description: "Value for Money", origin: "USA"},

  ];

  onToggleChange(){
    this.showListCars = !this.showListCars;
  }
}
