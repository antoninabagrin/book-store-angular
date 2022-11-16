import { Injectable } from '@angular/core';
import { BookModel } from '../../shared/models/book.model';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  private allBooks = [
    {
      id: 1,
      author: 'Chinua Achebe',
      totalPages: 209,
      title: 'Things Fall Apart',
      price: {
        currency: 'EUR',
        value: 39,
      },
    },
    {
      id: 2,
      author: 'Hans Christian Andersen',
      totalPages: 784,
      title: 'Fairy tales',
      price: {
        currency: 'EUR',
        value: 164,
      },
    },
  ];

  constructor() {}

  public getbooks(): any[] {
    return this.allBooks;
  }

  public addBook(bookModel: BookModel): void {
    this.allBooks.push(bookModel);
  }

  public recentBooks(): any[] {
    return [
      {
        id: 1,
        author: 'Chinua Achebe',
        totalPages: 209,
        title: 'Things Fall Apart',
        price: {
          currency: 'EUR',
          value: 39,
        },
      },
      {
        id: 2,
        author: 'Hans Christian Andersen',
        totalPages: 784,
        title: 'Fairy tales',
        price: {
          currency: 'EUR',
          value: 164,
        },
      },
    ];
  }
}
