import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { UiService } from 'src/app/services/ui.service';
import { Quote } from '../../Quote'
import { Subscription } from 'rxjs';

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
  showAddQuote!: boolean;
  subscription: Subscription;

  constructor(private uiService: UiService) { 
    this.subscription = this.uiService.onToggle().subscribe(value => this.showAddQuote = value)

  }

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
