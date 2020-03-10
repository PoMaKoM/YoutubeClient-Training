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
  get sorting(): 'date' | 'views' {
    return this._sorting;
  }
  set sorting(value: 'date' | 'views') {
    this._sorting = value;
  }
  get filter(): string {
    return this._filter;
  }
  set filter(value: string) {
    this._filter = value;
  }

  private _sorting: 'date' | 'views';

  private _filter: string = '';
  constructor(private http: HttpClient) {}

  // tslint:disable: max-line-length
  public searchVideos(query: string): Observable<SearchResponse> {
    // tslint:disable-next-line: no-inferrable-types
    let url: string = `${environment.apiURL}search?part=snippet&maxResults=16&q=${query}&type=video&key=${environment.apiKeyYT}`;
    return this.http.get<SearchResponse>(url);
  }

  public getViodeoList(ids: string[]): Observable<SearchResponse> {
    // tslint:disable-next-line: no-inferrable-types
    let url: string = `${environment.apiURL}videos?part=snippet%2Cstatistics&id=${ids}&key=${environment.apiKeyYT}`;
    return this.http.get<SearchResponse>(url);
  }

  public getById(id: string): Observable<SearchResponse> {
    // tslint:disable-next-line: no-inferrable-types
    let url: string = `${environment.apiURL}videos?part=snippet%2Cstatistics&id=${id}&key=${environment.apiKeyYT}`;
    return this.http.get<SearchResponse>(url);
  }
}
