import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ThemeModel } from './../../Models/ThemeModel';
import { ThemeControllerService } from './../../Servicies/theme-controller.service';

@Component({
  selector: 'app-nav-comments',
  templateUrl: './nav-comments.component.html',
  styleUrls: ['./nav-comments.component.scss']
})
export class NavCommentsComponent implements OnInit {

  readonly theme: ThemeModel;

  @Output() add: EventEmitter<void> = new EventEmitter<void>();

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
