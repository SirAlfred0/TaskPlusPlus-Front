import { CacheManagerService } from './../../Servicies/cache-manager.service';
import { ThemeModel } from './../../Models/ThemeModel';
import { ThemeControllerService } from './../../Servicies/theme-controller.service';
import { TaskPlusPlusAPIService } from 'src/app/Servicies/task-plus-plus.api.service';
import { ChangesModel } from './../../Models/ChangesModel';
import { Component, OnInit } from '@angular/core';
import { ChangesEntity } from 'src/app/Entities/ChangesEntity';
import { UserActions } from 'src/app/Enums/UserActions';
import { Router } from '@angular/router';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.scss']
})
export class SettingComponent implements OnInit {

  changes: ChangesModel = {NewFriends: '', NewMessages: ''};
  changesEntity: ChangesEntity = {AccessToken: ''};
  readonly theme: ThemeModel;

  constructor(private API: TaskPlusPlusAPIService,
    private themeService: ThemeControllerService,
    private cacheManager: CacheManagerService,
    private router: Router) {
    this.theme = this.themeService.GetTheme();
  }

  ngOnInit(): void {
    this.changesEntity.AccessToken = this.cacheManager.GetLoginDetails();

    this.API.Post(UserActions.GetRecentChanges,this.changesEntity).then(data => {
      this.changes = data;
    });
  }

  Logout()
  {
    this.cacheManager.ResetLoginDetails();
    this.router.navigate(['']);
  }

}
