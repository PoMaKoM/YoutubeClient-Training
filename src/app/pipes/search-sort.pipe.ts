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
        return posts.sort(function(a: SearchItem, b: SearchItem): number {
          return (
            +new Date(b.snippet.publishedAt) - +new Date(a.snippet.publishedAt)
          );
        });
      case 'views':
        return posts.sort(function(a: SearchItem, b: SearchItem): number {
          return +b.statistics.viewCount - +a.statistics.viewCount;
        });
      default:
        return posts;
    }
  }
}
