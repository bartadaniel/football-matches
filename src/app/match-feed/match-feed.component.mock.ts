import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { MatchHighlight } from '../models/match-highlight.model';
import { PublicPart } from '../utils/public-part.type';
import { MatchFeedComponent } from './match-feed.component';

@Component({
    selector: 'app-match-feed',
    template: '',
})
export class MatchFeedComponentMock implements PublicPart<MatchFeedComponent> {
    matchHighlights$: Observable<MatchHighlight[]>;
    ngOnInit(): void {}
}
