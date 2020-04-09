import { Injectable } from '@angular/core';
import { SearchResponse } from '../../shared/models/search-response.model';
import { Observable } from 'rxjs';
import {
  HttpClient,
  HttpResponse,
  HttpErrorResponse,
  HttpParams,
} from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map, mergeMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  constructor(private http: HttpClient) {}

  public searchVideos(
    query: string
  ): Observable<SearchResponse | HttpErrorResponse> {
    const searchParams: HttpParams = new HttpParams()
      .set('part', 'snippet')
      .set('type', 'video')
      .set('maxResults', '16')
      .set('q', query)
      .set('key', environment.apiKeyYT);
    return this.http
      .get<SearchResponse>(`${environment.apiUrlYT}search`, {
        params: searchParams,
      })
      .pipe(
        map((resp: SearchResponse) => {
          const idsList: string = resp.items
            .map((items) => items.id.videoId)
            .join(',');
          return idsList;
        }),
        mergeMap((idsList: string) => {
          const videoParams: HttpParams = new HttpParams()
            .set('part', 'snippet,statistics')
            .set('id', idsList)
            .set('key', environment.apiKeyYT);

          return this.http.get<SearchResponse>(`${environment.apiUrlYT}videos`, {
            params: videoParams,
          });
        })
      );
  }

  public getById(id: string): Observable<SearchResponse> {
    const getParams: HttpParams = new HttpParams()
      .set('part', 'snippet,statistics')
      .set('id', id)
      .set('key', environment.apiKeyYT);
    return this.http.get<SearchResponse>(`${environment.apiUrlYT}videos`, {
      params: getParams,
    });
  }
}
