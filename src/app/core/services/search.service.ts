import { Injectable } from '@angular/core';
import { SearchResponse } from '../../shared/models/search-response.model';
import { SearchItem } from 'src/app/shared/models/search-item.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  constructor(private http: HttpClient) {}

  private _sorting: 'date' | 'views';
  get sorting(): 'date' | 'views' {
    return this._sorting;
  }
  set sorting(value: 'date' | 'views') {
    this._sorting = value;
  }

  private _filter: string = '';
  get filter(): string {
    return this._filter;
  }
  set filter(value: string) {
    this._filter = value;
  }

  // tslint:disable: no-any
  public searchPosts(search: string): Observable<any> {
    return this.http
      .get(
        `${environment.apiURL}search?key=${environment.apiKeyYT}&type=video&part=snippet&maxResults=16&q=${search}`
      )
      .pipe(
        tap(
          event => {
            console.log(event);
            return event;
          },
          error => {
            console.log(error);
          }
        )
      );
  }

  public getById(id: string): any {
    return this.http
      .get(
        `${environment.apiURL}videos?key=${environment.apiKeyYT}&id=${id}&part=snippet,statistics`
      )
      .pipe(
        tap(
          event => {
            console.log('event', event);
            return event;
          },
          error => {
            console.log(error);
          }
        )
      );
  }
}
