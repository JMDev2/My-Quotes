import { Quote } from '@angular/compiler';
import { Component, OnInit, Input } from '@angular/core';
import { Quotes } from '../quotes';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {

  toggleDetails(index: number){
    this.quotes[index].showDescription = !this.quotes[index].showDescription; 
  }
  constructor() { }

  ngOnInit(): void {
  }
  quotes: Quotes []= [
    new Quotes ("The way to get started is to quit talking and begin doing. " ,0, 0, "author", "name", new Date(2022,3,1)),
    new Quotes ("Your time is limited, so don't waste it living someone else's life" ,0, 0, "author", "name", new Date(2020,3,1)),
    new Quotes ("If life were predictable it would cease to be life, and be without flavor" ,0, 0,"author", "name", new Date(2020,3,1))
  ];
 
  addNewQuote(quote){
    this.quotes.push(quote)
    console.log(quote)
  }


  arr: number[] = this.quotes.map(quote=>quote.upvote)
  highest = Math.max(...this.arr)
    
  upVotes(i){
    this.quotes[i].upvote++ 
  }
  downVotes(i){
    this.quotes[i].upvote--
  }


}
