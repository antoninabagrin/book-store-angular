import {
  AfterContentChecked,
  AfterContentInit,
  Component,
  ContentChild,
  DoCheck,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { AuthorModel } from '../../models/authors.model';
import { AuthorsAdressComponent } from '../authors-adress/authors-adress.component';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css'],
})
export class AuthorsComponent
  implements
    OnInit,
    OnChanges,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    OnDestroy
{
  @ContentChild(AuthorsAdressComponent)
  authAdress: AuthorsAdressComponent;

  @Input()
  data: number;

  @Input()
  data2: boolean;

  @Input()
  author: AuthorModel;

  public childCounter: number = 0;

  constructor() {}

  ngAfterContentInit(): void {
    console.log('Aftercontentinit' + this.authAdress?.address);
  }

  ngAfterContentChecked(): void {
    console.log('Aftercontentchecked' + this.authAdress?.address);
  }

  ngDoCheck(): void {
    console.log(this.author);
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(this.author);
  }

  ngOnInit(): void {}

  incCounter(): void {
    this.childCounter++;
  }

  ngOnDestroy(): void {
    console.log('onDestroy');
  }
}
