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
    let quotez = quote.quote
    let author = quote.author
    let name = quote.name
    this.quotes.push(new Quotes(quotez, 0, 0,author, name, new Date));

  
  }
  deleteGoal(isComplete, index){
    if (isComplete) {
      let toDelete = confirm(`Are you sure you want to delete ${this.quotes[index].name}?`)

      if (toDelete){
        this.quotes.splice(index,1)
}
    }
  }
  // arr: number[] = this.quotes.map(quote=>quote.upvote)
  // highest = Math.max(...this.arr)
    
  // upVotes(i){
  //   this.quotes[i].upvote++ 
  // }
  // downVotes(j){
  //   this.quotes[j].upvote--
  // }


}
