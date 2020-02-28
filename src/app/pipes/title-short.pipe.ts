import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'titleShort'
})
export class TitleShortPipe implements PipeTransform {
  public transform(value: string): string {
    return value.slice(0, 32) + '...';
  }
}
