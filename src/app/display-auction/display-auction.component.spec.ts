import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayAuctionComponent } from './display-auction.component';

describe('DisplayAuctionComponent', () => {
  let component: DisplayAuctionComponent;
  let fixture: ComponentFixture<DisplayAuctionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayAuctionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayAuctionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
