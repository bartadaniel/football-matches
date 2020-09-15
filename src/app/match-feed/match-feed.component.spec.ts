import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { MatchCardComponent } from '../match-card/match-card.component';
import { MatchCardComponentMock } from '../match-card/match-card.component.mock';
import { MatchHighlight } from '../models/match-highlight.model';
import { createMockMatchHighlight } from '../models/match-highlight.model.mock';
import { loadMatchHighlights } from '../store/actions/match-highlights.actions';
import { State } from '../store/reducers';
import { MatchFeedComponent } from './match-feed.component';

describe('MatchFeedComponent', () => {
    let component: MatchFeedComponent;
    let fixture: ComponentFixture<MatchFeedComponent>;
    let mockMatchHighlights: MatchHighlight[];
    let mockState: Partial<State>;
    let mockStore: MockStore;

    beforeEach(async () => {
        mockMatchHighlights = [createMockMatchHighlight(1), createMockMatchHighlight(2)];
        mockState = {
            matchHighlight: {
                matchHighlights: mockMatchHighlights,
                error: null,
            },
        };

        await TestBed.configureTestingModule({
            declarations: [MatchFeedComponent, MatchCardComponentMock],
            providers: [provideMockStore({ initialState: mockState })],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(MatchFeedComponent);
        mockStore = TestBed.inject(MockStore);
        component = fixture.componentInstance;
        spyOn(mockStore, 'dispatch');
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should display match highlights from store in cards', () => {
        const displayedMatchCards = fixture.debugElement
            .queryAll(By.css('app-match-card'))
            .map((matchCard) => (matchCard.componentInstance as MatchCardComponent).matchHighlight);
        expect(displayedMatchCards).toEqual(mockMatchHighlights);
    });

    it('should dispatch loadMatchHighlights on init', () => {
        expect(mockStore.dispatch).toHaveBeenCalledWith(loadMatchHighlights());
    });
});
