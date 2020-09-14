import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MatchHighlight } from '../models/match-highlight.model';

export const MATCH_HIGHLIGHT_URL = 'https://www.scorebat.com/video-api/v1/';

@Injectable({
    providedIn: 'root',
})
export class MatchHighlightService {
    constructor(private httpClient: HttpClient) {}

    getMatchHighlights(): Observable<MatchHighlight[]> {
        return this.httpClient.get<MatchHighlight[]>(MATCH_HIGHLIGHT_URL);
    }
}
