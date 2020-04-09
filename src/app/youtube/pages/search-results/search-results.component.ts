import { Component, OnInit } from '@angular/core';
import { SearchResponse } from 'src/app/shared/models/search-response.model';
import { ActivatedRoute, Params } from '@angular/router';
import { SettingsService } from 'src/app/core/services/settings.service';
import { SearchService } from 'src/app/core/services/search.service';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss'],
})
export class SearchResultsComponent implements OnInit {
  public videos: SearchResponse | null;

  constructor(
    public settingsService: SettingsService,
    private searchService: SearchService,
    private route: ActivatedRoute
  ) {}

  public ngOnInit(): void {
    this.route.queryParams.subscribe((queryParams: Params) => {
      if (queryParams.search) {
        this.searchService
          .searchVideos(queryParams.search)
          .subscribe((videos: SearchResponse) => {
            this.videos = videos;
          });
      } else {
        this.videos = null;
      }
    });
  }
}
