import { Component, OnInit } from '@angular/core';
import { MatchHighlight } from '../models/match-highlight.model';
import { createMockMatchHighlight } from '../models/match-highlight.model.mock';

@Component({
  selector: 'app-match-feed',
  templateUrl: './match-feed.component.html',
  styleUrls: ['./match-feed.component.css'],
})
export class MatchFeedComponent implements OnInit {
  matchHighlights: MatchHighlight[] = [
    createMockMatchHighlight(1),
    createMockMatchHighlight(2),
  ];

  constructor() {}

  ngOnInit(): void {}
}
