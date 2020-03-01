import { Component, OnInit, Input } from '@angular/core';
import { SearchItem } from 'src/app/youtube/models/search-item.model';
import { CardColorsDirective } from '../../../youtube/directives/card-colors.directive';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() public post: SearchItem;
  constructor() {}

  public ngOnInit(): void {}
}
