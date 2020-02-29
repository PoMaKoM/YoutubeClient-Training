import { Pipe, PipeTransform } from '@angular/core';
import { SearchItem } from '../models/search-item.model';

@Pipe({
  name: 'searchSort'
})
export class SearchSortPipe implements PipeTransform {
  public transform(
    posts: SearchItem[],
    sortBy: 'date' | 'views'
  ): SearchItem[] {
    switch (sortBy) {
      case 'date':
        return posts.reverse();
      case 'views':
        return posts;
      default:
        return posts;
    }
  }
}
