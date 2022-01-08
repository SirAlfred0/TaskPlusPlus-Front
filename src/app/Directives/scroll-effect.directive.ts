import { Directive, ElementRef, HostListener, Renderer2, HostBinding  } from '@angular/core';

@Directive({
  selector: '[appScrollEffect]'
})
export class ScrollEffectDirective {


  constructor(private elRef: ElementRef, private renderer: Renderer2) {
  }


}
