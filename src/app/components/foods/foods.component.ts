import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-foods',
  templateUrl: './foods.component.html',
  styleUrls: ['./foods.component.css']
})
export class FoodsComponent implements OnInit {

  public foods = [];
  public aux : string[] = [];
  public food: any;
  public deul = true;
  

  constructor() { }

  ngOnInit(): void {

  }
  
  filterFood = '';

}
