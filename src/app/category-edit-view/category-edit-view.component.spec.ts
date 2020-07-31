import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryEditViewComponent } from './category-edit-view.component';

describe('CategoryEditViewComponent', () => {
  let component: CategoryEditViewComponent;
  let fixture: ComponentFixture<CategoryEditViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoryEditViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryEditViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
