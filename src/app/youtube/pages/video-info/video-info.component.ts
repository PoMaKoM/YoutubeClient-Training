import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { SearchService } from 'src/app/core/services/search.service';
import { SearchItem } from 'src/app/shared/models/search-item.model';
import { SearchResponse } from 'src/app/shared/models/search-response.model';
import { CardColorsDirective } from 'src/app/youtube/directives/card-colors.directive';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-video-info',
  templateUrl: './video-info.component.html',
  styleUrls: ['./video-info.component.scss']
})
export class VideoInfoComponent implements OnInit {
  public video: SearchItem = null;

  constructor(
    private activatedRoute: ActivatedRoute,
    private searchService: SearchService,
    private router: Router
  ) {}

  public ngOnInit(): void {
    this.activatedRoute.params
      .pipe(
        switchMap((params: Params) => {
          return this.searchService.getById(params.id);
        })
      )
      .subscribe((videoList: SearchResponse) => {
        this.video = videoList.items[0];
      });
  }

  public back(): void {
    this.router.navigate(['client']);
  }
}
