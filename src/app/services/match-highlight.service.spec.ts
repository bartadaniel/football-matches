import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { createMockMatchHighlight } from '../models/match-highlight.model.mock';
import { MatchHighlightService, MATCH_HIGHLIGHT_URL } from './match-highlight.service';

describe('MatchHighlightService', () => {
    let service: MatchHighlightService;
    let httpTestingController: HttpTestingController;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
        });
        httpTestingController = TestBed.inject(HttpTestingController);
        service = TestBed.inject(MatchHighlightService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    it('should fetch match highlights', () => {
        const mockMatchHighlights = [createMockMatchHighlight(1), createMockMatchHighlight(2)];

        service.getMatchHighlights().subscribe((matchHighlights) => {
            const req = httpTestingController.expectOne(MATCH_HIGHLIGHT_URL);
            expect(req.request.method).toEqual('GET');
            req.flush(mockMatchHighlights);
            httpTestingController.verify();
            expect(matchHighlights).toEqual(mockMatchHighlights);
        });
    });
});
