import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Quote } from '../../Quote'

@Component({
  selector: 'app-add-quote',
  templateUrl: './add-quote.component.html',
  styleUrls: ['./add-quote.component.css']
})
export class AddQuoteComponent implements OnInit {
  @Output() onAddQuote: EventEmitter<Quote> = new EventEmitter
  text!: string;
  author!: string;
  inspirational: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }
  onSubmit() {
    if (!this.text) {
      alert('Please add quote before proceeding!');
      return;
    }
    const newQuote = {
      text: this.text,
      author: this.author,
      inspirational: this.inspirational,

    }
    //emit event
    this.onAddQuote.emit(newQuote);
    this.text = '';
    this.author = '';
    this.inspirational = false;
  }

}
