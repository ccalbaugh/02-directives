import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[dirHighlight]'
})
export class HighlightDirective {

  constructor(elementRef: ElementRef) {

   }

}
