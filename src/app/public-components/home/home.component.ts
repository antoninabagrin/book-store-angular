import {
  AfterViewChecked,
  AfterViewInit,
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { AuthComponent } from 'src/app/auth/auth.component';
import { AuthorsComponent } from 'src/app/shared/components/authors/authors.component';
import { AuthorModel } from 'src/app/shared/models/authors.model';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent
  implements OnInit, AfterViewInit, AfterViewChecked, OnDestroy
{
  @ViewChild('btnCounter')
  btnCounter: ElementRef;

  @ViewChild(AuthorsComponent) authComponent: AuthorsComponent;

  public count: number = 0;

  public test: boolean = false;

  public obj: AuthorModel = { id: 10, name: 'Anto' };

  public address: string = 'India';
  private time: any;

  constructor() {}

  ngOnDestroy(): void {
    clearInterval(this.time);
  }

  ngAfterViewChecked(): void {
    console.log(this.authComponent.childCounter);
  }

  ngAfterViewInit(): void {
    console.log(this.btnCounter);
    this.btnCounter.nativeElement.innerHTML = 'Button test updated';
  }

  ngOnInit(): void {
    this.timer();
  }

  public counter(): void {
    this.count++;
    this.test = !this.test;
    this.obj.id = this.count++;
    this.address = this.address + this.count;
  }

  timer(): void {
    this.time = setInterval(() => {
      this.count++;
    }, 1000);
  }
}
