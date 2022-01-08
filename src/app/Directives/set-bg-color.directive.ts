import { Directive, ElementRef, Renderer2, Input } from '@angular/core';

@Directive({
  selector: '[appSetBgColor]'
})
export class SetBgColorDirective {

  @Input() bgColor: string = '';

  constructor(private elRef: ElementRef,private renderer: Renderer2) {
  }


  ngOnInit()
  {
    this.renderer.setAttribute(this.elRef.nativeElement,'style','background-color:' + this.bgColor);
  }

}
