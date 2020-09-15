import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { MatchFeedComponentMock } from './match-feed/match-feed.component.mock';

describe('AppComponent', () => {
    let component: AppComponent;
    let fixture: ComponentFixture<AppComponent>;
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [AppComponent, MatchFeedComponentMock],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(AppComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create the app', () => {
        expect(component).toBeTruthy();
    });

    it('displays the match feed', () => {
        expect(fixture.debugElement.query(By.css('app-match-feed'))).toBeTruthy();
    });

    it('display the toolbar', () => {
        expect(fixture.debugElement.query(By.css('app-toolbar'))).toBeTruthy();
    });
});
