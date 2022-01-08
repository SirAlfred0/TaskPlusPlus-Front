import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ThemeModel } from './../../Models/ThemeModel';
import { ThemeControllerService } from './../../Servicies/theme-controller.service';

@Component({
  selector: 'app-nav-board-info',
  templateUrl: './nav-board-info.component.html',
  styleUrls: ['./nav-board-info.component.scss']
})
export class NavBoardInfoComponent implements OnInit {

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
