import { Component, OnInit, Input } from '@angular/core';
import { SearchItem } from 'src/app/models/search-item.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() protected post: SearchItem;
  constructor() {}

  public ngOnInit(): void {
    console.log(typeof this.post.statistics.likeCount);
  }
}
