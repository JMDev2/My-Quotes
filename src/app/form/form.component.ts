import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Quotes } from "../../app/quotes";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  
 quote: string;
 author: string;
 name: string;

  newQuote = new Quotes("", 0, 0,"", "",new Date());
  @Output() addQuote = new EventEmitter<Quotes>();

  // submitQuote(newQuote, form){


  //   if(newQuote.name == "" ||  newQuote.quote == ""){
     
  //     return;
  //   } else {
  //   this.addQuote.emit(this.newQuote);
  //   console.log(newQuote.name)
  //   }
  //   }


    submitQuote(form){
      console.log(form.value)
      this.addQuote.emit(form.value)
      
    }
    constructor() { }

  ngOnInit(): void {
  }
    
  }


