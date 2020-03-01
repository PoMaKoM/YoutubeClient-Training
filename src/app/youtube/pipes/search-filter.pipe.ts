import { Pipe, PipeTransform } from '@angular/core';
import { SearchItem } from '../models/search-item.model';

@Pipe({
  name: 'searchFilter'
})
export class SearchFilterPipe implements PipeTransform {
  public transform(posts: SearchItem[], serch: string = ''): SearchItem[] {
    if (!serch.trim()) {
      return posts;
    }

    return posts.filter(post => {
      return post.snippet.title
        .toLocaleLowerCase()
        .includes(serch.toLocaleLowerCase());
    });
  }
}
