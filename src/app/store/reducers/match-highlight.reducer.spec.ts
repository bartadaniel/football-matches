import { HttpErrorResponse } from '@angular/common/http';
import { createMockMatchHighlight } from 'src/app/models/match-highlight.model.mock';
import { loadMatchHighlightsFail, loadMatchHighlightsSuccess } from '../actions/match-highlights.actions';
import {
    initialState,
    matchHighlightReducer,
    MatchHighlightState,
    selectMatchHighlights,
    selectMatchHighlightsError,
} from './match-highlight.reducer';

describe('MatchHighlightReducer', () => {
    it('returns the default state on undefined action', () => {
        expect(matchHighlightReducer(undefined, { type: '' })).toEqual(initialState);
    });

    describe('loadMatchHighlightSuccess', () => {
        let mockMatchHighlights;
        let loadMatchHighlightsSuccessAction;

        beforeEach(() => {
            mockMatchHighlights = [createMockMatchHighlight(1), createMockMatchHighlight(2)];
            loadMatchHighlightsSuccessAction = loadMatchHighlightsSuccess({ matchHighlights: mockMatchHighlights });
        });

        it('should populate matchHighlights', () => {
            expect(matchHighlightReducer(initialState, loadMatchHighlightsSuccessAction).matchHighlights).toEqual(mockMatchHighlights);
        });

        it('should set error to null', () => {
            expect(matchHighlightReducer(initialState, loadMatchHighlightsSuccessAction).error).toBeNull();
            expect(matchHighlightReducer({ ...initialState, error: '404' }, loadMatchHighlightsSuccessAction).error).toBeNull();
        });
    });

    describe('loadMatchHighlightSuccess', () => {
        let loadMatchHighlightsFailAction;
        let error = new HttpErrorResponse({ statusText: 'There was an error' });

        beforeEach(() => {
            loadMatchHighlightsFailAction = loadMatchHighlightsFail({ error });
        });

        it('should set error', () => {
            expect(matchHighlightReducer(initialState, loadMatchHighlightsFailAction).error).toEqual(error.statusText);
        });
    });

    describe('Selectors', () => {
        const state: MatchHighlightState = {
            matchHighlights: [createMockMatchHighlight(1), createMockMatchHighlight(2)],
            error: '404',
        };

        beforeEach(() => {});

        it('selectMatchHighlights', () => {
            expect(selectMatchHighlights(state)).toEqual(state.matchHighlights);
        });

        it('selectMatchHighlightsError', () => {
            expect(selectMatchHighlightsError(state)).toEqual(state.error);
        });
    });
});
