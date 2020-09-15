import { ScrollingModule } from '@angular/cdk/scrolling';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { AppComponent } from './app.component';
import { MatchCardComponent } from './match-card/match-card.component';
import { MatchFeedComponent } from './match-feed/match-feed.component';
import { MatchHighlightEffects } from './match-highlight.effects';
import * as fromMatchHighlight from './store/reducers';
import { ToolbarComponent } from './toolbar/toolbar.component';

@NgModule({
    declarations: [AppComponent, MatchFeedComponent, MatchCardComponent, ToolbarComponent],
    imports: [
        BrowserModule,
        StoreModule.forRoot(fromMatchHighlight.reducers, {
            metaReducers: fromMatchHighlight.metaReducers,
            runtimeChecks: {
                // strictStateImmutability and strictActionImmutability are enabled by default
                strictStateSerializability: true,
                strictActionSerializability: true,
                strictActionWithinNgZone: true,
                strictActionTypeUniqueness: true,
            },
        }),
        StoreDevtoolsModule.instrument({
            maxAge: 25,
            logOnly: environment.production,
        }),
        EffectsModule.forRoot([MatchHighlightEffects]),
        BrowserAnimationsModule,
        HttpClientModule,
        MatCardModule,
        MatToolbarModule,
        MatIconModule,
        MatButtonModule,
        ScrollingModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
