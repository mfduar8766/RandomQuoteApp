import {Component} from '@angular/core';
import {QuoteService} from '../services/quote.service';
import {Quote} from '../models/quoteClass';

@Component({
    selector: 'quoteBox',
    templateUrl: './quoteBox.component.html',
    styleUrls : ['./quoteBox.component.scss']
})
export class QuoteBoxComponent {
    public quote =  new Quote('', '');
    constructor(public quoteServices: QuoteService){
        this.getQuote();
    }

    public getQuote() {
        this.quoteServices.getRandomQuote().subscribe((data: Quote) => {
            this.quote = new Quote(data.quote, data.author);
        });
    }
}