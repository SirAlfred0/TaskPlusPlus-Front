import { Location } from '@angular/common';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ThemeModel } from './../../Models/ThemeModel';
import { ThemeControllerService } from './../../Servicies/theme-controller.service';

@Component({
  selector: 'app-nav-contact-list',
  templateUrl: './nav-contact-list.component.html',
  styleUrls: ['./nav-contact-list.component.scss']
})
export class NavContactListComponent implements OnInit {

  readonly theme: ThemeModel;

  @Output() add: EventEmitter<void> = new EventEmitter<void>();

  constructor(private loc: Location,private themeService: ThemeControllerService) {
    this.theme = this.themeService.GetTheme();
  }

  ngOnInit(): void {
  }


  Back()
  {
    this.loc.back();
  }

  Add()
  {
    this.add.emit();
  }

}
