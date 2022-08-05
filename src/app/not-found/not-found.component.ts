import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.css']
})
export class NotFoundComponent implements OnInit {
  timer=10
  constructor(private router:Router) { }

  ngOnInit(): void {
    //funtion to redirect to dashboard
    setTimeout(() => {
      this.router.navigateByUrl("/dashboard");
    },10000);

    //function to show timer
    setInterval(()=>{
      this.timer-=1
    },1000)
  }

}
