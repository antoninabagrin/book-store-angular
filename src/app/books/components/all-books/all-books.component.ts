import { Component, OnInit } from '@angular/core';
import { BookModel } from '../../../shared/models/book.model';
import { BookService } from '../../services/book.service';

@Component({
  selector: 'app-all-books',
  templateUrl: './all-books.component.html',
  styleUrls: ['./all-books.component.css'],
})
export class AllBooksComponent implements OnInit {
  public books: BookModel[] = [];

  private _pageTitle: string;

  public set pageTitle(value: string) {
    this._pageTitle = value;
  }

  public get pageTitle(): string {
    return this._pageTitle;
  }

  constructor(public bookService: BookService) {}

  ngOnInit(): void {
    this.pageTitle = 'All books';
    const allBooks = this.bookService.getbooks();
    allBooks.forEach((b) => {
      let obj = new BookModel();
      obj.id = b.id;
      obj.author = b.author;
      obj.price = b.price;
      obj.title = b.title;
      obj.totalPages = b.totalPages;
      obj.isPublished = b.isPublished;
      obj.publishedOn = b.publishedOn;
      this.books.push(obj);
    });
    console.log(this.books);
  }
}
