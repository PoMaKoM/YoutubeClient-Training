import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {
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
  constructor() {}
}
