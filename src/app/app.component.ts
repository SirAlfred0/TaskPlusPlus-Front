import { CacheManagerService } from './Servicies/cache-manager.service';
import { Router, RouterOutlet } from '@angular/router';
import { Location } from '@angular/common';
import { ThemeModel } from './Models/ThemeModel';
import { ThemeControllerService } from './Servicies/theme-controller.service';
import { Component, HostListener } from '@angular/core';
import { LoadingManagerService } from './Servicies/loading-manager.service';
import { routeTransitionAnimations } from './RouterAnimations/Route-transition-animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [routeTransitionAnimations]
})
export class AppComponent {

  readonly theme: ThemeModel;

  Loading: boolean = false;


  constructor(private themeService: ThemeControllerService,
    private loc: Location,
    private loadingManager: LoadingManagerService,
    private router: Router,
    private cacheManager: CacheManagerService)
  {
    this.theme = this.themeService.GetTheme();
    //localStorage.clear();
  }

  @HostListener('window:popstate',['$event']) onWindowsBack(event: any){
    event.preventDefault();
    self.close();
    window.close();
    close();
  }

  @HostListener('backbutton',['$event']) onAndroidBack(event: any){
    event.preventDefault();
    self.close();
    window.close();
    close();
  }

  ngOnInit()
  {
    if(this.cacheManager.GetLoginDetails() == '')
    {
      this.router.navigate(['']);
    }
  }

  ngDoCheck()
  {
    this.Loading = this.loadingManager.GetLoader();
  }

  ActiveTheme()
  {
    if(this.loc.path() == "" || this.loc.path() == "/success") return false;

    return true;
  }

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animationState'];
   }
}
