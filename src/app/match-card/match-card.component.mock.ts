import { Component } from '@angular/core';
import { MatchHighlight } from '../models/match-highlight.model';
import { MatchCardComponent } from './match-card.component';

@Component({
  selector: 'app-match-card',
  template: '',
})
export class MatchCardComponentMock implements MatchCardComponent {
  constructor() {}
  matchHighlight: MatchHighlight;
  ngOnInit(): void {}
}
