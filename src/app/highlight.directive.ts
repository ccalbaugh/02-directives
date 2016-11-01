import { Directive, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[dirHighlight]'
})
export class HighlightDirective {
  @HostListener('mouseenter') mouseover() {
    this.backgroundColor = 'green';
  };
  @HostListener('mouseleave') mouseleave() {
    this.backgroundColor = 'white';
  };
  @HostBinding('style.backgroundColor') get setColor() { // this get method turns setColor into a read-only property
    return this.backgroundColor;
  }

  private  backgroundColor = 'white';
  constructor() { // setting private creates the private prop, and automatically assigns the objective value
    // this.elementRef.nativeElement.style.backgroundColor = 'green';
    // this.renderer.setElementStyle(this.elementRef.nativeElement, 'backgroundColor', 'green');

   }

}
