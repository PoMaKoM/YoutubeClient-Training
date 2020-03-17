import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { filter, debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  public settings: boolean = false;
  public request: FormControl;

  constructor(private router: Router, private activetedRoute: ActivatedRoute) {}

  public ngOnInit(): void {
    const qery: string | null =
      this.activetedRoute.snapshot.queryParams.search || null;

    this.request = new FormControl(qery, Validators.required);

    this.request.valueChanges.pipe(debounceTime(750)).subscribe(val => {
      this.search(val);
    });
  }

  public search(val: string): void {
    if (!val) {
      console.log('CLEAR');
    }

    this.router.navigate(['/client'], {
      queryParams: { search: val }
    });
  }
}
