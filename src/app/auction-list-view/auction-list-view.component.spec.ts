import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuctionListViewComponent } from './auction-list-view.component';

describe('AuctionListViewComponent', () => {
  let component: AuctionListViewComponent;
  let fixture: ComponentFixture<AuctionListViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuctionListViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuctionListViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
