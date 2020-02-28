import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { SearchResultsComponent } from './components/search-results/search-results.component';
import { CardComponent } from './components/search-results/card/card.component';
import { SearchComponent } from './components/header/search/search.component';
import { AuthInfoComponent } from './components/header/auth-info/auth-info.component';
import { SearchSettingsComponent } from './components/header/search-settings/search-settings.component';
import { SearchService } from './services/search.service';
import { NumberShortPipe } from './pipes/number-short.pipe';
import { TitleShortPipe } from './pipes/title-short.pipe';
import { SearchFilterPipe } from './pipes/search-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchResultsComponent,
    CardComponent,
    SearchComponent,
    AuthInfoComponent,
    SearchSettingsComponent,
    NumberShortPipe,
    TitleShortPipe,
    SearchFilterPipe
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule],
  providers: [SearchService],
  bootstrap: [AppComponent]
})
export class AppModule {}
