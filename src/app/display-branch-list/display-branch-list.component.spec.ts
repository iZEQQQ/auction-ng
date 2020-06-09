import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayBranchListComponent } from './display-branch-list.component';

describe('DisplayBranchListComponent', () => {
  let component: DisplayBranchListComponent;
  let fixture: ComponentFixture<DisplayBranchListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayBranchListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayBranchListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
