import { Directive, ElementRef, Input, Output, Renderer2 } from '@angular/core';
import { SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appSelect]'
})
export class SelectDirective {

  @Input() color: string = "#5166b0b3";
  @Input() mainColor: string = "#5166b0b3"

  constructor(private elRef: ElementRef,private render: Renderer2) { }

  ngDoCheck()
  {
    //console.log(this.elRef.nativeElement.getAttribute('ng-reflect-model').toEqual(true))

    if(this.elRef.nativeElement.checked)
    if(this.elRef.nativeElement.nextSibling.getAttribute('style') != null)
    {
      //this.render.removeStyle(this.elRef.nativeElement.nextSibling,'color');
      this.render.setStyle(this.elRef.nativeElement.nextSibling,'color', this.color);
    }


    if(!this.elRef.nativeElement.checked)
    {
      this.render.setStyle(this.elRef.nativeElement.nextSibling,'color', this.mainColor);
    }
  }

}
