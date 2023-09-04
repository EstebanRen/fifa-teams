import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardTeamsComponent } from './card-teams.component';

describe('CardTeamsComponent', () => {
  let component: CardTeamsComponent;
  let fixture: ComponentFixture<CardTeamsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardTeamsComponent]
    });
    fixture = TestBed.createComponent(CardTeamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
