import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BranchListViewComponent } from './branch-list-view.component';

describe('BranchListViewComponent', () => {
  let component: BranchListViewComponent;
  let fixture: ComponentFixture<BranchListViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BranchListViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BranchListViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
