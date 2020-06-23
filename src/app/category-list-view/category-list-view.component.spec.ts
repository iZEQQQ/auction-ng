import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryListViewComponent } from './category-list-view.component';

describe('CategoryListViewComponent', () => {
  let component: CategoryListViewComponent;
  let fixture: ComponentFixture<CategoryListViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoryListViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryListViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
