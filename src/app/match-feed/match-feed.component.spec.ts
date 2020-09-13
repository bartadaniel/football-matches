import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchFeedComponent } from './match-feed.component';

describe('MatchFeedComponent', () => {
  let component: MatchFeedComponent;
  let fixture: ComponentFixture<MatchFeedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatchFeedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MatchFeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
