import { Component } from '@angular/core';
import { MatchHighlight } from '../models/match-highlight.model';
import { MatchFeedComponent } from './match-feed.component';

@Component({
  selector: 'app-match-feed',
  template: '',
})
export class MatchFeedComponentMock implements MatchFeedComponent {
  matchHighlights: MatchHighlight[];
  ngOnInit(): void {}
}
