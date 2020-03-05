import { Component, Input } from '@angular/core';
import { SearchItem } from 'src/app/shared/models/search-item.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() public post: SearchItem;
  constructor() {}
}
