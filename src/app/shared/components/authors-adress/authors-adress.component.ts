import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-authors-adress',
  templateUrl: './authors-adress.component.html',
  styleUrls: ['./authors-adress.component.css'],
})
export class AuthorsAdressComponent implements OnInit {
  @Input()
  address: string;

  constructor() {}

  ngOnInit(): void {}
}
