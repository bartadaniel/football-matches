import { createReducer, on } from '@ngrx/store';
import { MatchHighlight } from 'src/app/models/match-highlight.model';
import { loadMatchHighlightsFail, loadMatchHighlightsSuccess } from '../actions/match-highlights.actions';

export interface MatchHighlightState {
    matchHighlights: MatchHighlight[];
    error: string;
}

export const initialState: MatchHighlightState = {
    matchHighlights: [],
    error: null,
};

export const matchHighlightReducer = createReducer(
    initialState,
    on(loadMatchHighlightsSuccess, (state, action) => ({ matchHighlights: action.matchHighlights, error: null })),
    on(loadMatchHighlightsFail, (state, action) => ({
        ...state,
        error: action.error.statusText,
    }))
);

export const selectMatchHighlights = (state: MatchHighlightState) => state.matchHighlights;
export const selectMatchHighlightsError = (state: MatchHighlightState) => state.error;
