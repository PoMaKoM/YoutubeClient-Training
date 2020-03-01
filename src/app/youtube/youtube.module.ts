import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { SearchResultsComponent } from './pages/search-results/search-results.component';
import { CardComponent } from './components/card/card.component';
import { NumberShortPipe } from './pipes/number-short.pipe';
import { TitleShortPipe } from './pipes/title-short.pipe';
import { SearchFilterPipe } from './pipes/search-filter.pipe';
import { SearchSortPipe } from './pipes/search-sort.pipe';
import { CardColorsDirective } from './directives/card-colors.directive';

const routes: Routes = [{ path: '', component: SearchResultsComponent }];

@NgModule({
  declarations: [
    SearchResultsComponent,
    CardComponent,
    NumberShortPipe,
    TitleShortPipe,
    SearchFilterPipe,
    SearchSortPipe,
    CardColorsDirective
  ],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class YoutubeModule {}
