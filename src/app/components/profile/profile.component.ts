import { CacheManagerService } from './../../Servicies/cache-manager.service';
import { ThemeModel } from './../../Models/ThemeModel';
import { ThemeControllerService } from './../../Servicies/theme-controller.service';
import { ProfileModel } from './../../Models/ProfileModel';
import { GetProfileEntity } from './../../Entities/Profile/GetProfileEntity';
import { SetProfileEntity } from './../../Entities/Profile/SetProfileEntity';
import { TaskPlusPlusAPIService } from './../../Servicies/task-plus-plus.api.service';
import { Component, OnInit, ElementRef } from '@angular/core';
import { UserActions } from 'src/app/Enums/UserActions';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  readonly theme: ThemeModel;

  imgUrl: any = "";
  setProfileEntity: SetProfileEntity = {AccessToken: '', FirstName: '', LastName: '', Bio: '', Img: '', Email: '', PhoneNumber: ''};
  getProfileEntity: GetProfileEntity ={AccessToken: ''};
  profile: ProfileModel = {FirstName: '', LastName: '', Bio: '', Img: '', Email: '', PhoneNumber: ''};

  constructor(private API: TaskPlusPlusAPIService,
    private themeService: ThemeControllerService,
    private cacheManager: CacheManagerService) {
    this.theme = this.themeService.GetTheme();
  }

  ngOnInit(): void {
    this.setProfileEntity.AccessToken = this.cacheManager.GetLoginDetails();
    this.getProfileEntity.AccessToken = this.cacheManager.GetLoginDetails();

    this.API.Post(UserActions.GetProfile,this.getProfileEntity).then( data => {
      this.profile = data;
      this.setProfileEntity.FirstName = this.profile.FirstName;
      this.setProfileEntity.LastName = this.profile.LastName;
      this.setProfileEntity.Email = this.profile.Email;
      this.setProfileEntity.Bio = this.profile.Bio;
      this.setProfileEntity.Img = this.profile.Img;
      this.setProfileEntity.PhoneNumber = this.profile.PhoneNumber;
    });


  }


  GetImage(event: any)
  {
    const files = event.target.files;

    if (files.length === 0) return;

    if(files[0].type.match(/image\/*/) == null) return;

    const reader = new FileReader();

    reader.readAsDataURL(files[0]);

    reader.onload = (e) => {
      this.imgUrl = reader.result;
    };
  }


  SaveChanges()
  {
    this.API.Post(UserActions.ChangeProfile,this.setProfileEntity).then(data => {
      if(data.result)
      {
        this.API.Post(UserActions.GetProfile,this.getProfileEntity).then( datas => {
          this.profile = datas;
        });
      }
    });
  }

  FocusNextSibiling(item: HTMLInputElement)
  {
    item.select();
  }
}
