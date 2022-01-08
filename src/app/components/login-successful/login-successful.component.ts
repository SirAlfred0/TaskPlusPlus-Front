import { CacheManagerService } from './../../Servicies/cache-manager.service';
import { ThemeControllerService } from './../../Servicies/theme-controller.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TaskPlusPlusAPIService } from 'src/app/Servicies/task-plus-plus.api.service';

@Component({
  selector: 'app-login-successful',
  templateUrl: './login-successful.component.html',
  styleUrls: ['./login-successful.component.scss']
})
export class LoginSuccessfulComponent implements OnInit {



  constructor(private router: Router, private cacheManager: CacheManagerService) { }

  ngOnInit(): void {
    if(this.cacheManager.GetLoginDetails() == '')
    {
      this.router.navigate(['../']);
    }
  }


  ngDoCheck()
  {
    setTimeout(() => {
      this.router.navigate(['/boards']);
    }, 3000);

  }

}
