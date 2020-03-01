import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'titleShort'
})
export class TitleShortPipe implements PipeTransform {
  public transform(value: string): string {
    const shortVal: string = value.slice(0, 32);
    if (value === shortVal) {
      return value;
    } else {
      return shortVal + '...';
    }
  }
}
