import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { MatchHighlightService } from './services/match-highlight.service';
import { loadMatchHighlights, loadMatchHighlightsFail, loadMatchHighlightsSuccess } from './store/actions/match-highlights.actions';

@Injectable()
export class MatchHighlightEffects {
    loadMatchHighlights$ = createEffect(() =>
        this.actions$.pipe(
            ofType(loadMatchHighlights),
            switchMap(() =>
                this.matchHighlightService.getMatchHighlights().pipe(
                    map((matchHighlights) => loadMatchHighlightsSuccess({ matchHighlights })),
                    catchError((error) => of(loadMatchHighlightsFail({ error: error as HttpErrorResponse })))
                )
            )
        )
    );

    constructor(private actions$: Actions, private matchHighlightService: MatchHighlightService) {}
}
