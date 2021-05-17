import { Component, OnInit } from '@angular/core';
import {quote} from './../../models/quote';
import {author} from './../../models/author';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {

  quotes!:quote[]
  authors!:author[]

  inputquote:string="";

  inputauthor:string="";

  numberOfLikes:number=0;

  numberOfDislikes:number=0;

  myDate =Date.now();

 

  constructor() { }

  ngOnInit(): void {
    this.quotes=[
     
    ]
    this.authors=[

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
  addauthor (){
    this.authors.push({
      content:this.inputauthor,
      
    })
    this.inputauthor="";
  }
  likeButtonClick(){
    this.numberOfLikes++;
    
  }
  dislikeButtonClick(){
    this.numberOfDislikes++;
  }

}
