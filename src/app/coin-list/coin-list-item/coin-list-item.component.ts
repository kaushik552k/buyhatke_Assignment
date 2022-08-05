import { Component, Input, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: '[app-coin-list-item]',
  templateUrl: './coin-list-item.component.html',
  styleUrls: ['./coin-list-item.component.css']
})
export class CoinListItemComponent implements OnInit,OnChanges {
  @Input() coin:any;
  isFavourite;
  isPositive=false;


  constructor() { }

  ngOnInit(): void {
    if(localStorage.getItem(this.coin.code)=="true"){
      this.isFavourite=true;
    }
    // this.percentChange = ((this.coin.last_traded_price-this.coin.yes_price)*100 / this.coin.yes_price).toFixed(2);
    if(parseFloat(this.coin.percentChange)>=0.00){
      this.isPositive=true;
    }
  }
  ngOnChanges(): void {


  }

  //function for add to favourite
  addToFav(){
    if(localStorage.getItem(this.coin.code)=="true"){
      this.isFavourite=false;
      localStorage.setItem(this.coin.code,"false")
    }
    else if(localStorage.getItem(this.coin.code)=="false"){
      this.isFavourite=true;
      localStorage.setItem(this.coin.code,"true");
    }
    else{
      this.isFavourite=true;
      localStorage.setItem(this.coin.code,"true");
    }

  }
}
