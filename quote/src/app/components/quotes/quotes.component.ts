import { Component, OnInit } from '@angular/core';
import {quote} from './../../models/quote';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {

  quotes!:quote[]

  inputquote:string="";

  constructor() { }

  ngOnInit(): void {
    this.quotes=[
      {
        content:'first quote',
        completed: false
      },
      {
        content:'second quote',
        completed: true
      },
    ]
  }

  deleteQuote (id:number){
    this.quotes = this.quotes.filter((v,i)=>i !==id);
  }
  addquote (){
    this.quotes.push({
      content:this.inputquote,
      completed:true
    })

    this.inputquote="";
  }

}
