import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  public settings: boolean = false;
  public searchForm: FormGroup;

  constructor(private router: Router, private activetedRoute: ActivatedRoute) {}

  public ngOnInit(): void {
    const qery: string | null =
      this.activetedRoute.snapshot.queryParams.search || null;
    this.searchForm = new FormGroup({
      request: new FormControl(qery, Validators.required)
    });
  }

  public search(): void {
    if (this.searchForm.invalid) {
      this.router.navigate(['/client'], {
        queryParams: {}
      });
      return;
    }

    this.router.navigate(['/client'], {
      queryParams: { search: this.searchForm.value.request }
    });
  }
}
