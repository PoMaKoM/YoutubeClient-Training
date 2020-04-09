import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'numberShort'
})
export class NumberShortPipe implements PipeTransform {
  public transform(value: string): string {
    let numberVal: number = +value;

    const NUMBER_COUNT_SOMETHING: Array<string> = ['', 'K', 'M', 'B', 'T', 'Q'];

    let count: number = 0;
    while (numberVal > 1000) {
      count++;
      numberVal /= 1000;
    }
    return Math.floor(numberVal) + NUMBER_COUNT_SOMETHING[count];
  }
}
