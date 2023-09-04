import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterFifaComponent } from './filter-fifa.component';

describe('FilterFifaComponent', () => {
  let component: FilterFifaComponent;
  let fixture: ComponentFixture<FilterFifaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FilterFifaComponent]
    });
    fixture = TestBed.createComponent(FilterFifaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
