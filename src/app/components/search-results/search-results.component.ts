import { Component, OnInit, Input } from '@angular/core';
import { SearchService } from 'src/app/services/search.service';
import { SearchResponse } from 'src/app/models/search-response.model';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})
export class SearchResultsComponent implements OnInit {
  @Input() public posts: SearchResponse;

  constructor(private searchService: SearchService) {}

  public ngOnInit(): void {
    this.posts = this.searchService.searchPosts();
  }
}
