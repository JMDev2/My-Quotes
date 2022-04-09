import { Component, OnInit } from '@angular/core';
import { Quotes } from '../quotes';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  quotes: Quotes []= [
    new Quotes ("The way to get started is to quit talking and begin doing. " ,6, 0),
    new Quotes ("Your time is limited, so don't waste it living someone else's life" ,0, 0),
    new Quotes ("If life were predictable it would cease to be life, and be without flavor" ,0, 0)
  ];
 


  arr: number[] = this.quotes.map(quote=>quote.upvote)
  highest = Math.max(...this.arr)
    
}
