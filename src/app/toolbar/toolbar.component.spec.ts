import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatToolbarModule } from '@angular/material/toolbar';
import { By } from '@angular/platform-browser';
import { ToolbarComponent } from './toolbar.component';

describe('ToolbarComponent', () => {
    let component: ToolbarComponent;
    let fixture: ComponentFixture<ToolbarComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [MatToolbarModule],
            declarations: [ToolbarComponent],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(ToolbarComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should display the title', (done) => {
        console.log(fixture.debugElement.query(By.css('.app-toolbar__title')).nativeElement);
        fixture.whenStable().then(() => {
            expect(fixture.debugElement.query(By.css('.app-toolbar__title')).nativeElement.innerHTML).toContain('Football Highlights');
            done();
        });
    });
});
