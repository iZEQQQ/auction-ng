import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuctionEditViewComponent } from './auction-edit-view.component';

describe('AuctionEditViewComponent', () => {
  let component: AuctionEditViewComponent;
  let fixture: ComponentFixture<AuctionEditViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuctionEditViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuctionEditViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
