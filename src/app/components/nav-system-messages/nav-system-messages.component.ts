import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ThemeModel } from './../../Models/ThemeModel';
import { ThemeControllerService } from './../../Servicies/theme-controller.service';

@Component({
  selector: 'app-nav-system-messages',
  templateUrl: './nav-system-messages.component.html',
  styleUrls: ['./nav-system-messages.component.scss']
})
export class NavSystemMessagesComponent implements OnInit {

  readonly theme: ThemeModel;

  constructor(private loc: Location,private themeService: ThemeControllerService) {
    this.theme = this.themeService.GetTheme();
  }

  ngOnInit(): void {
  }

  Back()
  {
    this.loc.back();
  }

}
