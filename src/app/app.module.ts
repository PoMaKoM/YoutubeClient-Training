import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { SearchResultsComponent } from './components/search-results/search-results.component';
import { CardComponent } from './components/search-results/card/card.component';
import { SearchComponent } from './components/header/search/search.component';
import { SettingsComponent } from './components/header/search/settings/settings.component';
import { VideoInfoComponent } from './components/video-info/video-info.component';
import { AuthInfoComponent } from './components/header/auth-info/auth-info.component';
import { AuthComponent } from './components/auth/auth.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchResultsComponent,
    CardComponent,
    SearchComponent,
    SettingsComponent,
    VideoInfoComponent,
    AuthInfoComponent,
    AuthComponent
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
