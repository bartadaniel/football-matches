import { Component, Input, OnInit } from '@angular/core';
import { MatchHighlight } from '../models/match-highlight.model';

@Component({
    selector: 'app-match-card',
    templateUrl: './match-card.component.html',
    styleUrls: ['./match-card.component.scss'],
})
export class MatchCardComponent implements OnInit {
    @Input() matchHighlight: MatchHighlight;

    constructor() {}

    ngOnInit(): void {}
}
