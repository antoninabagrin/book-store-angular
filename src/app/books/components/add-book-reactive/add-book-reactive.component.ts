import { Component, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { BookService } from '../../services/book.service';

@Component({
  selector: 'app-add-book-reactive',
  templateUrl: './add-book-reactive.component.html',
  styleUrls: ['./add-book-reactive.component.css'],
})
export class AddBookReactiveComponent implements OnInit {
  prices: any[] = [
    { value: 100, viewValue: '100' },
    { value: 200, viewValue: '200' },
    { value: 300, viewValue: '300' },
  ];

  currencies: any[] = [
    { value: 'USD', viewValue: 'US Dolar' },
    { value: 'INR', viewValue: 'Indian Rupes' },
    { value: 'EUR', viewValue: 'Euro' },
  ];

  public addBookForm: FormGroup;

  public titleErrorMessage: string;

  public authorErrorMessage: string;

  public get authors() {
    return <FormArray>this.addBookForm.get('authors');
  }

  constructor(
    private _bookService: BookService,
    private _formBuiler: FormBuilder
  ) {}

  ngOnInit(): void {
    this.initForm();
    const titleControl = this.addBookForm.get('title');
    titleControl?.valueChanges.subscribe((x) => {
      this.validateTitleControl(titleControl as FormControl);
    });

    const authorControl = this.addBookForm.get('author');
    authorControl?.valueChanges.subscribe((x) => {
      this.validateAuthorControl(authorControl as FormControl);
    });

    const formatTypeControl = this.addBookForm.get('formatType');
    formatTypeControl?.valueChanges.subscribe((x) => {
      this.formatTypeChanged(x);
    });
  }

  private initForm(): void {
    this.addBookForm = this._formBuiler.group({
      title: ['Default', [Validators.required, Validators.minLength(5)]],
      // author: '',
      totalPages: '',
      price: this._formBuiler.group({
        currency: '',
        value: '',
      }),
      publishedOn: '',
      isPublished: '',
      formatType: '',
      pdfFormat: '',
      docFormat: '',
      authors: this._formBuiler.array([this.getAuthorControl()]),
    });
  }

  private getAuthorControl(): FormGroup {
    return this._formBuiler.group({
      fullname: '',
    });
  }

  public addMoreAuthor(): void {
    this.authors.push(this.getAuthorControl());
  }

  public removeAuthor(i: number): void {
    this.authors.removeAt(i);
  }

  saveBook(): void {
    console.log(this.addBookForm);
    if (this.addBookForm.valid) {
      this._bookService.addBook(this.addBookForm.value);
    } else {
      alert('ERRROR,FORM INVALID');
    }
  }

  updateFormValues(): void {
    this.addBookForm.patchValue({
      title: ' Bagrin Antonina',
      author: 'something',
    });
  }

  private validateTitleControl(titleControl: FormControl): void {
    if (titleControl.errors && (titleControl.touched || titleControl.dirty)) {
      if (titleControl.errors?.required) {
        this.titleErrorMessage = 'This is a required field';
      } else if (titleControl.errors?.minlength) {
        this.titleErrorMessage =
          'Minimum length is ' + titleControl.errors?.minlength.requiredLength;
      }
    }
  }

  private validateAuthorControl(authorControl: FormControl): void {
    if (
      authorControl.errors &&
      (authorControl.touched || authorControl.dirty)
    ) {
      if (authorControl.errors?.required) {
        this.authorErrorMessage = 'This is a required field';
      }
    }
  }

  private formatTypeChanged(formatType: string): void {
    const pdfControl = this.addBookForm.get('pdfFormat');
    const docControl = this.addBookForm.get('docFormat');
    if (formatType === 'pdf') {
      pdfControl?.addValidators([
        Validators.required,
        Validators.minLength(10),
      ]);
      docControl?.clearValidators();
    } else if (formatType === 'doc') {
      docControl?.addValidators(Validators.required);
      pdfControl?.clearValidators();
    }

    pdfControl?.updateValueAndValidity();
    docControl?.updateValueAndValidity();
  }
}
