import { Component } from '@angular/core';
import { SettingsService } from 'src/app/core/services/settings.service';

@Component({
  selector: 'app-search-settings',
  templateUrl: './search-settings.component.html',
  styleUrls: ['./search-settings.component.scss']
})
export class SearchSettingsComponent {
  constructor(public settingsService: SettingsService) {}

  public sorting(value: 'date' | 'views'): void {
    this.settingsService.sorting = value;
  }
}
