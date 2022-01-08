import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { ThemeModel } from './../../Models/ThemeModel';
import { ThemeControllerService } from './../../Servicies/theme-controller.service';

@Component({
  selector: 'app-nav-sub-tasks',
  templateUrl: './nav-sub-tasks.component.html',
  styleUrls: ['./nav-sub-tasks.component.scss']
})
export class NavSubTasksComponent implements OnInit {

  readonly theme: ThemeModel;

  @Output() add: EventEmitter<void> = new EventEmitter<void>();
  @Input() parentId: string = '';
  @Input() commentCount: string = '0';

  constructor(private loc: Location,private themeService: ThemeControllerService,private router: Router) {
    this.theme = this.themeService.GetTheme();
  }

  ngOnInit(): void {
  }

  Back()
  {
    this.loc.back();
  }

  GoToHomePage()
  {
    this.router.navigateByUrl('/');
  }

  Add()
  {
    this.add.emit();
  }

}
