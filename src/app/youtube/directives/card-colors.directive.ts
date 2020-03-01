import { Directive, ElementRef, Renderer2, Input, OnInit } from '@angular/core';
import { MILISEC_IN_DAY, MONTS_DAYS } from '../constants/time.constans.js';

@Directive({
  selector: '[appCardColors]'
})
export class CardColorsDirective implements OnInit {
  @Input('appCardColors') public publishedAt: string;

  constructor(private el: ElementRef, private render: Renderer2) {}

  public ngOnInit(): void {
    let timeSpace: 'new' | 'hot' | 'old';
    const date: Date = new Date(this.publishedAt);
    const days: number = Math.ceil(
      Math.abs(Date.now() - date.getTime()) / MILISEC_IN_DAY
    );

    if (days < 7) {
      timeSpace = 'hot';
    } else if (days < MONTS_DAYS) {
      timeSpace = 'new';
    } else if (days >= MONTS_DAYS * 6) {
      timeSpace = 'old';
    }

    if (timeSpace) {
      this.render.addClass(this.el.nativeElement, timeSpace);
    }
  }
}
