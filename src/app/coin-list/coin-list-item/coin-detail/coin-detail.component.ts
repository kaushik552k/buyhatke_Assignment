import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-coin-detail',
  templateUrl: './coin-detail.component.html',
  styleUrls: ['./coin-detail.component.css']
})
export class CoinDetailComponent implements OnInit {
  isPositive=false;
  currentObj={}
  coin: any;

  constructor(private router:Router) {
    //storing data received through route
    this.currentObj=this.router.getCurrentNavigation().extras.state;
   }

  ngOnInit(): void {
    if(this.currentObj==undefined){
      this.router.navigateByUrl("**");
    }

    this.coin=this.currentObj
    if(parseInt(this.coin.percentChange)>0){
      this.isPositive=true;
    }
    console.log(this.coin);

  }

}
