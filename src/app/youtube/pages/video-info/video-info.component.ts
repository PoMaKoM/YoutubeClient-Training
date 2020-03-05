import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SearchService } from 'src/app/core/services/search.service';
import { SearchItem } from 'src/app/shared/models/search-item.model';

@Component({
  selector: 'app-video-info',
  templateUrl: './video-info.component.html',
  styleUrls: ['./video-info.component.scss']
})
export class VideoInfoComponent implements OnInit {
  public post: SearchItem;

  constructor(
    private activatedRoute: ActivatedRoute,
    private searchService: SearchService,
    private router: Router
  ) {}

  public ngOnInit(): void {
    this.post = this.searchService.getById(
      this.activatedRoute.snapshot.params.id
    ) ;
  }

  public back(): void {
    this.router.navigate(['client']);
  }
}
