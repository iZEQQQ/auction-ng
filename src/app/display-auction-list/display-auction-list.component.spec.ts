import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayAuctionListComponent } from './display-auction-list.component';

describe('DisplayAuctionListComponent', () => {
  let component: DisplayAuctionListComponent;
  let fixture: ComponentFixture<DisplayAuctionListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayAuctionListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayAuctionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
