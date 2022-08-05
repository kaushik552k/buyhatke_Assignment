import { Component, OnInit } from '@angular/core';
import { coinData } from 'src/data/coinData';
import { CoinDataService } from '../shared/services/coin-data.service';
import { priceData } from 'src/data/priceData';
import { Router } from '@angular/router';

@Component({
  selector: 'app-coin-list',
  templateUrl: './coin-list.component.html',
  styleUrls: ['./coin-list.component.css']
})
export class CoinListComponent implements OnInit {

  coinDataMerge=[];
  coinsData=[];
  constructor(
    private router: Router,
    private coinDataService: CoinDataService) {

    }

  ngOnInit(): void {
     // adding both api data into a single object and pushing into an array with the help of service
     this.coinDataMerge.push(this.coinDataService.mergeObject(coinData[0].data[0], priceData));
     Object.entries(this.coinDataMerge).map((item) => {
       for(let key in item[1]){
         this.coinsData.push(item[1][key])
       }
     });
  }

  //function for check whether the user clicked on routing or add to favourite
  onClick(coin,event){
    if(event.target.className!="fav fa fa-star" && event.target.className!="fav fa fa-star-o"){
      this.router.navigateByUrl('/dashboard/'+coin.code, { state: coin });
    }
  }
}
