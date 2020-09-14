import { HttpErrorResponse } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { of, ReplaySubject, throwError } from 'rxjs';
import { MatchHighlightEffects } from './match-highlight.effects';
import { createMockMatchHighlight } from './models/match-highlight.model.mock';
import { MatchHighlightService } from './services/match-highlight.service';
import { loadMatchHighlights, loadMatchHighlightsFail, loadMatchHighlightsSuccess } from './store/actions/match-highlights.actions';

describe('MatchHighlightEffects', () => {
    let actions$ = new ReplaySubject(1);
    let effects: MatchHighlightEffects;
    let matchHighlightService: jasmine.SpyObj<MatchHighlightService>;
    let mockMatchHighlights = [createMockMatchHighlight(1), createMockMatchHighlight(2)];

    beforeEach(() => {
        actions$ = new ReplaySubject(1);
        actions$.next(loadMatchHighlights());

        matchHighlightService = jasmine.createSpyObj('matchHighlightService', ['getMatchHighlights']);
        matchHighlightService.getMatchHighlights.and.returnValue(of(mockMatchHighlights));

        TestBed.configureTestingModule({
            providers: [
                MatchHighlightEffects,
                provideMockActions(() => actions$),
                {
                    provide: MatchHighlightService,
                    useValue: matchHighlightService,
                },
            ],
        });

        effects = TestBed.inject(MatchHighlightEffects);
    });

    it('should call getMatchHighlights of MatchHighlightService when loadMatchHighlights is dispatched', () => {
        matchHighlightService.getMatchHighlights.and.returnValue(of(mockMatchHighlights));
        effects.loadMatchHighlights$.subscribe((action) => expect(matchHighlightService.getMatchHighlights).toHaveBeenCalledTimes(1));
    });

    it('should dispatch loadMatchHighlightsSucess when match highlights are successfully loaded', async () => {
        matchHighlightService.getMatchHighlights.and.returnValue(of(mockMatchHighlights));
        effects.loadMatchHighlights$.subscribe((action) => {
            expect(action).toEqual(loadMatchHighlightsSuccess({ matchHighlights: mockMatchHighlights }));
        });
    });

    it('should dispatch loadmatchHighlightsFail when highlights could not be loaded', async () => {
        let mockErrorResponse = new HttpErrorResponse({ status: 404 });
        matchHighlightService.getMatchHighlights.and.returnValue(throwError(mockErrorResponse));
        effects.loadMatchHighlights$.subscribe((action) => {
            expect(action).toEqual(loadMatchHighlightsFail({ error: mockErrorResponse }));
        });
    });
});
