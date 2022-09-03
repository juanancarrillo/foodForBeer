import { Pipe, PipeTransform } from '@angular/core';
import { FoodService } from 'src/app/services/food.service'

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  public foods: any;
  public aux : string[] = [];
  constructor(
    public foodService: FoodService
  ) { }

  transform(value: any, arg: any): any {
    const chosenFood = [];
    if (arg === '') return value;
    this.foodService.getFood(arg)
      .subscribe(res => 
        {this.foods = res;
      })
      if(this.foods){
        for (let num of this.foods){
          for (let fod of num['food_pairing']){
            if(fod.includes(arg) && !this.aux.includes(fod)){
              chosenFood.push(fod)
            }
          } 
        }
      }
    return chosenFood;
  }
}