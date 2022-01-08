import { Menu } from './../Entities/Menu';
import { MousePosition } from './../Entities/MousePosition';
import { Directive, ElementRef, HostListener, Output, Renderer2 } from '@angular/core';
import { Observable, fromEvent, observable } from 'rxjs';
import { delay, takeUntil, tap } from 'rxjs/operators';
import { EventEmitter } from '@angular/core';


@Directive({
  selector: '[appHoldElement]'
})
export class HoldElementDirective {

  constructor(private elRef: ElementRef, private renderder: Renderer2)
  {

  }

  ngDoCheck()
  {
    if(window.screen.height - (window.screen.height / 4) > window.visualViewport.height)
    {
      this.renderder.setStyle(this.elRef.nativeElement,'background-color','#f00');
    }
  }
}
