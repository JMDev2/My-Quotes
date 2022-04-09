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
    new Quotes ("First Quote" ,0, 0),
    new Quotes ("second Quote" ,0, 0),
    new Quotes ("third Quote" ,0, 0)
  ]
    
}
