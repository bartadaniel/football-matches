import { createReducer, on } from '@ngrx/store';
import { MatchHighlight } from 'src/app/models/match-highlight.model';
import { loadMatchHighlightsFail, loadMatchHighlightsSuccess } from '../actions/match-highlights.actions';

export interface State {
    matchHighlights: MatchHighlight[];
    error: string;
}

export const initialState: State = {
    matchHighlights: [],
    error: null,
};

export const reducer = createReducer(
    initialState,
    on(loadMatchHighlightsSuccess, (state, action) => ({ matchHighlights: action.matchHighlights, error: null })),
    on(loadMatchHighlightsFail, (state, action) => ({
        ...state,
        error: action.error,
    }))
);
