import { ThemeControllerService } from './../../Servicies/theme-controller.service';
import { ThemeModel } from './../../Models/ThemeModel';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-nav-tasks',
  templateUrl: './nav-tasks.component.html',
  styleUrls: ['./nav-tasks.component.scss']
})
export class NavTasksComponent implements OnInit {

  readonly theme: ThemeModel;

  @Input() parentId: string = '';

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
