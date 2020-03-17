import { Injectable } from '@angular/core';
import { SearchResponse } from '../../shared/models/search-response.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
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
