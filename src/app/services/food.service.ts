import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class FoodService {

    constructor(public httpClient: HttpClient) { }

    getFood(food: any): Observable<any>{
        const response = this.httpClient.get(
            'https://api.punkapi.com/v2/beers?food=' + food
        );
      return response;
        
    }

}
