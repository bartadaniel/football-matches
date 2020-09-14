import { HttpErrorResponse } from '@angular/common/http';
import { createAction, props } from '@ngrx/store';
import { MatchHighlight } from 'src/app/models/match-highlight.model';

export const loadMatchHighlights = createAction('[Match Highlight] Load');
export const loadMatchHighlightsSuccess = createAction('[Match Highlight] Load Success', props<{ matchHighlights: MatchHighlight[] }>());
export const loadMatchHighlightsFail = createAction('[Match Highlight] Load Fail', props<{ error: HttpErrorResponse }>());
