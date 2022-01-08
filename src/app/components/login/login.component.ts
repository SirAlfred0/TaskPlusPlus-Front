import { TaskPlusPlusAPIService } from 'src/app/Servicies/task-plus-plus.api.service';
import { CacheManagerService } from './../../Servicies/cache-manager.service';
import { validateMethods } from './../../Enums/ValidateMethods';
import { ValidationService } from '../../Servicies/validation.service';
import { UserActions } from '../../Enums/UserActions';
import { SignIn } from './../../Entities/SignIn';
import { Component, OnInit } from '@angular/core';
import { DeviceDetectorService } from 'ngx-device-detector';
import { Router } from '@angular/router';
import { digitsFaToEn } from '@persian-tools/persian-tools';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})



export class LoginComponent implements OnInit {


  responce: any = null;
  SignInData: SignIn = {
                        PhoneNumber: '',
                        EmailAddress: '',
                        OsVersion: this.deviceService.getDeviceInfo().os_version,
                        DeviceType: this.deviceService.getDeviceInfo().deviceType,
                        BrowerVersion: this.deviceService.getDeviceInfo().browser_version,
                        Orientation: this.deviceService.getDeviceInfo().orientation
                      };



  constructor(private router: Router,
    private deviceService: DeviceDetectorService,
    private cacheManager: CacheManagerService,
    private API: TaskPlusPlusAPIService,
    private validateService: ValidationService) { }

  ngOnInit(): void {
    if(this.cacheManager.GetLoginDetails() != '')
    {
      this.router.navigate(['/boards'])
    }
  }

  SignIn()
  {
    this.SignInData.PhoneNumber = digitsFaToEn(this.SignInData.PhoneNumber);
    this.responce = this.API.Post(UserActions.SignIn,this.SignInData).then(data => {
      if(data.result)
      {
        this.router.navigate(['/success']);
        this.cacheManager.SetLoginDetails(data.accessCode);
      }
      this.responce = null;
    })
  }

  IsResponcePending()
  {
    if(this.responce == null) return false;

    return true;
  }

  CheckPhoneNumber()
  {
    return this.validateService.validate(digitsFaToEn(this.SignInData.PhoneNumber),validateMethods.signin);
  }

}
