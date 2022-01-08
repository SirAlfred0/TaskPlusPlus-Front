import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ThemeModel } from './../../Models/ThemeModel';
import { ThemeControllerService } from './../../Servicies/theme-controller.service';

@Component({
  selector: 'app-nav-board',
  templateUrl: './nav-board.component.html',
  styleUrls: ['./nav-board.component.scss']
})
export class NavBoardComponent implements OnInit {
  readonly theme: ThemeModel;

  @Output() focus: EventEmitter<any> = new EventEmitter<any>();

  constructor(private themeService: ThemeControllerService) {
    this.theme = this.themeService.GetTheme();
  }

  ngOnInit(): void {
  }

  Focus()
  {
    this.focus.emit();
  }

}
