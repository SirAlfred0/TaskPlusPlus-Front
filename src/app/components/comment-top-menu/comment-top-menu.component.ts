import { ThemeModel } from './../../Models/ThemeModel';
import { ThemeControllerService } from './../../Servicies/theme-controller.service';

import { DeleteComment } from 'src/app/Entities/Comment/DeleteComment';
import { Component, OnInit, Input,HostListener, Output, EventEmitter, ElementRef } from '@angular/core';


@Component({
  selector: 'app-comment-top-menu',
  templateUrl: './comment-top-menu.component.html',
  styleUrls: ['./comment-top-menu.component.scss']
})
export class CommentTopMenuComponent implements OnInit {

  readonly theme: ThemeModel;

  @Input() open: boolean = false;
  @Output() deleteEvent: EventEmitter<any> = new EventEmitter<any>();
  @Output() closeMenu: EventEmitter<any> = new EventEmitter<any>();


  @HostListener('window:mouseup', ['$event'])  OnClick(event: any) {
    if(event.target != this.elRef.nativeElement.childNodes[0] && event.target.offsetParent != this.elRef.nativeElement.childNodes[0])
    {
      if(this.open)
      {
        this.open = false;
        this.closeMenu.emit();
      }
    }
  }

  constructor(private elRef: ElementRef,private themeService: ThemeControllerService) {
    this.theme = this.themeService.GetTheme();
  }

  ngOnInit(): void {
  }


  Delete()
  {
    this.deleteEvent.emit();
  }

}
