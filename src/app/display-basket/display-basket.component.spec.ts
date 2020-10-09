import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayBasketComponent } from './display-basket.component';

describe('DisplayBasketComponent', () => {
  let component: DisplayBasketComponent;
  let fixture: ComponentFixture<DisplayBasketComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayBasketComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayBasketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
