import { Component, OnInit } from '@angular/core';
import { MatchHighlight } from '../models/match-highlight.model';

@Component({
  selector: 'app-match-feed',
  templateUrl: './match-feed.component.html',
  styleUrls: ['./match-feed.component.css'],
})
export class MatchFeedComponent implements OnInit {
  matchHighlights: MatchHighlight[];

  constructor() {}

  ngOnInit(): void {}
}
