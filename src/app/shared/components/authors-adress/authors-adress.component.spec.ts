import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorsAdressComponent } from './authors-adress.component';

describe('AuthorsAdressComponent', () => {
  let component: AuthorsAdressComponent;
  let fixture: ComponentFixture<AuthorsAdressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthorsAdressComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuthorsAdressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
