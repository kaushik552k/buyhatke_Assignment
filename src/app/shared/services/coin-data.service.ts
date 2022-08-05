import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoinDataService {

  coinApiURL: string = environment.coinApi;
  private headers: HttpHeaders = new HttpHeaders({
    'Access-Control-Allow-Origin': '*'
  });
  constructor(
      private httpClient: HttpClient,
      ) {
        // this.headers = new HttpHeaders().set("Access-Control-Allow-Origin", "*")
  }

  public getCoinData(): Observable<any> {
      const url = this.coinApiURL;
      return this.httpClient.get<any>(url);
  }

  public mergeObject(obj1, obj2) {
    let output = {};
    let perChange = {};
    let code = {};
      Object.keys(obj1).map((key) => {
        if(obj2[key.toUpperCase()] && obj2[key.toUpperCase()].volume.volume){
          code={
            "code":key.toUpperCase()
          }
          if(obj2[key.toUpperCase()].yes_price){
            perChange={
              "percentChange":((obj2[key.toUpperCase()].last_traded_price - obj2[key.toUpperCase()].yes_price)*100 / obj2[key.toUpperCase()].yes_price).toFixed(2)
            }
          }
          let result = { ...code,...obj1[key], ...obj2[key.toUpperCase()],...perChange };

        output[key] = result;
        }
      });
    return output;
  }
}


