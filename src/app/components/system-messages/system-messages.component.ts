import { CacheManagerService } from './../../Servicies/cache-manager.service';
import { ThemeControllerService } from './../../Servicies/theme-controller.service';
import { ThemeModel } from './../../Models/ThemeModel';
import { DateStatus } from './../../Entities/DateStatus';
import { MessageModel } from './../../Models/MessageModel';
import { GetMessages } from './../../Entities/SystemMessage/GetMessages';
import { TaskPlusPlusAPIService } from './../../Servicies/task-plus-plus.api.service';
import { Component, OnInit } from '@angular/core';
import { UserActions } from 'src/app/Enums/UserActions';

@Component({
  selector: 'app-system-messages',
  templateUrl: './system-messages.component.html',
  styleUrls: ['./system-messages.component.scss']
})
export class SystemMessagesComponent implements OnInit {

  readonly theme: ThemeModel;

  getMessagesEntity: GetMessages = {AccessToken: ''};

  messages: MessageModel[] = [];
  dates: DateStatus[] = [];

  constructor(private API: TaskPlusPlusAPIService,
    private themeService: ThemeControllerService,
    private cacheManager: CacheManagerService) {
    this.theme = this.themeService.GetTheme();
  }

  ngOnInit(): void {
    this.getMessagesEntity.AccessToken = this.cacheManager.GetLoginDetails();

    this.API.Post(UserActions.GetSystemMessages,this.getMessagesEntity).then( data => {
      this.messages = data;
    }
    )
  }


  CanShow(d: string): boolean
  {
    let result: boolean = true;
    if(this.dates.length != this.messages.length)
    {
      let spliteDate = d.split('T');
      let yearAndMonth = spliteDate[0]

      for(let item of this.dates)
      {
        if(item.Date == d)
        {
          result = true;
        }else{
          let itemSpliteDate = item.Date.split('T');
          let itemYearAndMonth = itemSpliteDate[0];

          if(itemYearAndMonth == yearAndMonth)
          {
            result = false;
            break;
          }else{
            result = true;
          }
        }
      }

      let Exists: boolean = false;
      this.dates.forEach((item) => {
        if(item.Date == d)
        {
          Exists = true;
        }
      });
      if(!Exists)
      {
        this.dates.push({Date: d, LastStatus: result});
      }
    }else{
      this.dates.forEach((item) =>{
        if(item.Date == d)
        {
          result = item.LastStatus;
        }
      });
    }

    return result
  }

}
