import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentBooksComponent } from './recent-books.component';

describe('RecentBooksComponent', () => {
  let component: RecentBooksComponent;
  let fixture: ComponentFixture<RecentBooksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecentBooksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecentBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
