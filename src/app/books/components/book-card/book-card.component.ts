import { Component, Input, OnInit } from '@angular/core';
import { BookModel } from '../../../shared/models/book.model';

@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.css'],
})
export class BookCardComponent implements OnInit {
  @Input('allBooks')
  public set book(value: BookModel[]) {
    value.map((x) => (x.title = 'Title: ' + x.title));
    this._book = value;
  }

  public get book(): BookModel[] {
    return this._book;
  }
  private _book: BookModel[];

  constructor() {}

  ngOnInit(): void {}
}
