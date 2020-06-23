import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayCategoryListComponent } from './display-category-list.component';

describe('DisplayCategoryListComponent', () => {
  let component: DisplayCategoryListComponent;
  let fixture: ComponentFixture<DisplayCategoryListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayCategoryListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayCategoryListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
