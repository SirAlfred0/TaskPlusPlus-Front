import { CacheManagerService } from './../../Servicies/cache-manager.service';
import { ThemeControllerService } from './../../Servicies/theme-controller.service';
import { ThemeModel } from './../../Models/ThemeModel';
import { RemoveFriend } from './../../Entities/Friend/RemoveFriend';
import { digitsFaToEn } from '@persian-tools/persian-tools';
import { GetFriendList } from './../../Entities/Friend/GetFriendList';
import { RequestResponce } from './../../Entities/Friend/RequestResponce';
import { FriendRequest } from '../../Models/FriendRequest';
import { GetFriendRequest } from './../../Entities/Friend/GetFriendRequest';
import { ValidationService } from './../../Servicies/validation.service';
import { TaskPlusPlusAPIService } from './../../Servicies/task-plus-plus.api.service';
import { AddFriend } from './../../Entities/Friend/AddFriend';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { validateMethods } from 'src/app/Enums/ValidateMethods';
import { UserActions } from 'src/app/Enums/UserActions';
import { Friend } from 'src/app/Models/Friend';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss']
})
export class ContactListComponent implements OnInit {

  readonly theme: ThemeModel;

  @ViewChild('addInput', { static: false }) addInput: ElementRef<HTMLInputElement> = {} as ElementRef;

  accessToken: string = '';

  addFriendEntity: AddFriend = {AccessToken: '', PhoneNumber: ''};
  getFriendRequestEntity: GetFriendRequest = {AccessToken: ''};
  getFriendListEntity: GetFriendList = {AccessToken: ''};
  requests: FriendRequest[] = [];
  friends: Friend[] = [];


  constructor(private API: TaskPlusPlusAPIService,
    private validation: ValidationService,
    private themeService: ThemeControllerService,
    private cacheManager: CacheManagerService) {
    this.theme = this.themeService.GetTheme();
  }

  ngOnInit(): void {
    this.accessToken = this.cacheManager.GetLoginDetails();
    this.getFriendRequestEntity = {AccessToken: this.accessToken};
    this.getFriendListEntity = {AccessToken: this.accessToken};

    this.API.Post(UserActions.GetFriendRequest, this.getFriendRequestEntity).then(data =>{
      this.requests = data;
    });

    this.API.Post(UserActions.GetFriendList,this.getFriendListEntity).then(data =>{
      this.friends = data;
    });
  }

  Focus(item: any,input: any)
  {
    item.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
    if(window.pageYOffset == 0)
    {
      input.focus();
    }
  }


  Drop(t: any) {
    let effectivePull = screen.width / 10;
    if(t.distance.x > effectivePull)
    {
      let removeFriend: RemoveFriend = {Id: t.item.data, AccessToken: this.accessToken};

      this.API.Post(UserActions.RemoveFriend, removeFriend).then(data => {
        if(data.result)
        this.API.Post(UserActions.GetFriendList,this.getFriendListEntity).then(datas =>{
          this.friends = datas;
        });
      })
    }
  }


  AddFriend(number: string)
  {

    this.addFriendEntity = {AccessToken: this.accessToken, PhoneNumber:  digitsFaToEn(number)};

    if(this.validation.validate(this.addFriendEntity.PhoneNumber, validateMethods.signin))
    this.API.Post(UserActions.AddFriend,this.addFriendEntity).then(data =>{
      if(data.result)
        this.addInput.nativeElement.value = '';
    });
  }


  ApplyRequestResponce(id: string,responce: boolean)
  {
    let requestResponce: RequestResponce = {AccessToken: this.accessToken, Id: id, Responce: responce};

    this.API.Post(UserActions.ApplyFriendRequestResponce,requestResponce).then(data => {
      this.API.Post(UserActions.GetFriendRequest, this.getFriendRequestEntity).then(datas =>{
        this.requests = datas;
      });

      if(data.result)
      this.API.Post(UserActions.GetFriendList,this.getFriendListEntity).then(datas =>{
        this.friends = datas;
      });
    });
  }

}
