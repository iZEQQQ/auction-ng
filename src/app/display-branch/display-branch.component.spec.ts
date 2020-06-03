import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayBranchComponent } from './display-branch.component';

describe('DisplayBranchComponent', () => {
  let component: DisplayBranchComponent;
  let fixture: ComponentFixture<DisplayBranchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayBranchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayBranchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
