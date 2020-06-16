import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BranchEditViewComponent } from './branch-edit-view.component';

describe('BranchEditViewComponent', () => {
  let component: BranchEditViewComponent;
  let fixture: ComponentFixture<BranchEditViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BranchEditViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BranchEditViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
