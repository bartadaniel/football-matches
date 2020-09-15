import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { MatchHighlight } from '../models/match-highlight.model';
import { createMockMatchHighlight } from '../models/match-highlight.model.mock';
import { MatchCardComponent } from './match-card.component';

describe('MatchCardComponent', () => {
    let component: MatchCardComponent;
    let fixture: ComponentFixture<MatchCardComponent>;
    let mockMatchHighlight: MatchHighlight;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [MatchCardComponent],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(MatchCardComponent);
        component = fixture.componentInstance;

        mockMatchHighlight = createMockMatchHighlight(1);
        component.matchHighlight = mockMatchHighlight;

        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('displays title of match highlight', () => {
        const titleEl: HTMLElement = fixture.debugElement.query(By.css('.app-match-card__title')).nativeElement;
        expect(titleEl.textContent).toContain(mockMatchHighlight.title);
    });

    it('displays competition name of match highlight', () => {
        const titleEl: HTMLElement = fixture.debugElement.query(By.css('.app-match-card__competition')).nativeElement;
        expect(titleEl.textContent).toContain(mockMatchHighlight.competition.name);
    });

    it('displays thumbnail of match highlight', () => {
        const thumbnailEl: HTMLImageElement = fixture.debugElement.query(By.css('.app-match-card__thumbnail')).nativeElement;
        expect(thumbnailEl.src).toContain(mockMatchHighlight.thumbnail);
    });

    it('displays link to open highlight', () => {
        const linkEl: HTMLLinkElement = fixture.debugElement.query(By.css('.app-match-card__link')).nativeElement;
        expect(linkEl.href).toContain(mockMatchHighlight.url);
    });
});
