
import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[QuitApp]'
})
export class QuitAPP {


  constructor() {
  }

  @HostListener('window:popstate') onWindowsBack(){
    self.close();
    window.close();
    close();
  }

  @HostListener('backbutton') onAndroidBack(){
    self.close();
    window.close();
    close();
  }


  ngDoCheck()
  {

  }
}
