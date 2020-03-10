import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SearchService } from 'src/app/core/services/search.service';
import { SearchItem } from 'src/app/shared/models/';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-video-info',
  templateUrl: './video-info.component.html',
  styleUrls: ['./video-info.component.scss']
})
export class VideoInfoComponent implements OnInit {
  public post: [] = [];
  public postSub: Subscription;

  constructor(
    private activatedRoute: ActivatedRoute,
    private searchService: SearchService,
    private router: Router
  ) {}

  public ngOnInit(): void {
    this.postSub = this.searchService
      .getById(this.activatedRoute.snapshot.params.id)
      .subscribe(posts => {
        this.post = posts.items[0];
        console.log(this.post);
      });
  }

  public back(): void {
    this.router.navigate(['client']);
  }

  // ngOnDestroy() {
  //   if (this.postSub) {
  //     this.postSub.unsubscribe();
  //   }
  //   if (this.delSub) {
  //     this.delSub.unsubscribe();
  //   }
  // }
}
