import { ActionReducerMap, createFeatureSelector, createSelector, MetaReducer } from '@ngrx/store';
import { environment } from '../../../environments/environment';
import { getMatchHighlights, getMatchHighlightsError, matchHighlightReducer, MatchHighlightState } from './match-highlight.reducer';

export const matchHighlightFeatureKey = 'matchHighlight';

export interface State {
    [matchHighlightFeatureKey]: MatchHighlightState;
}

export const reducers: ActionReducerMap<State> = {
    [matchHighlightFeatureKey]: matchHighlightReducer,
};

export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];

export const selectMatchHighlightState = createFeatureSelector<State, MatchHighlightState>(matchHighlightFeatureKey);
export const selectMatchHighlights = createSelector(selectMatchHighlightState, getMatchHighlights);
export const selectMatchHighlightsError = createSelector(selectMatchHighlightState, getMatchHighlightsError);
