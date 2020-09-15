import { HttpErrorResponse } from '@angular/common/http';
import { createMockMatchHighlight } from 'src/app/models/match-highlight.model.mock';
import { loadMatchHighlightsFail, loadMatchHighlightsSuccess } from '../actions/match-highlights.actions';
import { initialState, reducer } from './match-highlight.reducer';

describe('MatchHighlightReducer', () => {
    it('returns the default state on undefined action', () => {
        expect(reducer(undefined, { type: '' })).toEqual(initialState);
    });

    describe('loadMatchHighlightSuccess', () => {
        let mockMatchHighlights;
        let loadMatchHighlightsSuccessAction;

        beforeEach(() => {
            mockMatchHighlights = [createMockMatchHighlight(1), createMockMatchHighlight(2)];
            loadMatchHighlightsSuccessAction = loadMatchHighlightsSuccess({ matchHighlights: mockMatchHighlights });
        });

        it('should populate matchHighlights', () => {
            expect(reducer(initialState, loadMatchHighlightsSuccessAction).matchHighlights).toEqual(mockMatchHighlights);
        });

        it('should set error to null', () => {
            expect(reducer(initialState, loadMatchHighlightsSuccessAction).error).toBeNull();
            expect(reducer({ ...initialState, error: '404' }, loadMatchHighlightsSuccessAction).error).toBeNull();
        });
    });

    describe('loadMatchHighlightSuccess', () => {
        let loadMatchHighlightsFailAction;
        let error = new HttpErrorResponse({ status: 404 });

        beforeEach(() => {
            loadMatchHighlightsFailAction = loadMatchHighlightsFail({ error });
        });

        it('should set error', () => {
            expect(reducer(initialState, loadMatchHighlightsFailAction).error).toEqual(error);
        });
    });
});
