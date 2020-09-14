import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { MatchCardComponent } from '../match-card/match-card.component';
import { MatchCardComponentMock } from '../match-card/match-card.component.mock';
import { MatchHighlight } from '../models/match-highlight.model';
import { createMockMatchHighlight } from '../models/match-highlight.model.mock';
import { MatchFeedComponent } from './match-feed.component';

describe('MatchFeedComponent', () => {
  let component: MatchFeedComponent;
  let fixture: ComponentFixture<MatchFeedComponent>;
  let mockMatchHighlights: MatchHighlight[];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MatchFeedComponent, MatchCardComponentMock],
    }).compileComponents();
  });

  beforeEach(() => {
    mockMatchHighlights = [
      createMockMatchHighlight(1),
      createMockMatchHighlight(2),
    ];
    fixture = TestBed.createComponent(MatchFeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display match highlights in cards', () => {
    component.matchHighlights = mockMatchHighlights;
    fixture.detectChanges();
    console.log(fixture.debugElement.queryAll(By.css('app-match-card')));
    const displayedMatchCards = fixture.debugElement
      .queryAll(By.css('app-match-card'))
      .map(
        (matchCard) =>
          (matchCard.componentInstance as MatchCardComponent).matchHighlight
      );
    expect(displayedMatchCards).toEqual(mockMatchHighlights);
  });
});
