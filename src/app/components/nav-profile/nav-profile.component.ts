import { Location } from '@angular/common';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ThemeModel } from './../../Models/ThemeModel';
import { ThemeControllerService } from './../../Servicies/theme-controller.service';

@Component({
  selector: 'app-nav-profile',
  templateUrl: './nav-profile.component.html',
  styleUrls: ['./nav-profile.component.scss']
})
export class NavProfileComponent implements OnInit {

  readonly theme: ThemeModel;

  @Output() SaveChangesEvent: EventEmitter<any> = new EventEmitter<any>();

  constructor(private loc: Location,private themeService: ThemeControllerService) {
    this.theme = this.themeService.GetTheme();
  }

  ngOnInit(): void {
  }

  Back()
  {
    this.loc.back();
  }

  SaveChanges()
  {
    this.SaveChangesEvent.emit();
  }
}
