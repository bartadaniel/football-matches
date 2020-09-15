import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { MatchHighlight } from '../../models/match-highlight.model';
import { loadMatchHighlights } from '../../store/actions/match-highlights.actions';
import { selectMatchHighlights } from '../../store/reducers';

@Component({
    selector: 'app-match-feed',
    templateUrl: './match-feed.component.html',
    styleUrls: ['./match-feed.component.scss'],
})
export class MatchFeedComponent implements OnInit {
    matchHighlights$: Observable<MatchHighlight[]>;

    constructor(private store: Store) {}

    ngOnInit(): void {
        this.store.dispatch(loadMatchHighlights());
        this.matchHighlights$ = this.store.select(selectMatchHighlights);
    }
}
