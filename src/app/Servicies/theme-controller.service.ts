import { ThemeModel } from './../Models/ThemeModel';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ThemeControllerService {


  //colors are 5166b0 dae0f1 8160a9

  // 66: fade b3: normal

  private theme: ThemeModel = {
    Color60Bold: "#dae0f1",
    Color60Normal: "#dae0f1",
    Color60Fade: "#dae0f1",
    Color30Bold: "#8160a9",
    Color30Normal: "#8160a9",
    Color30Fade: "#8160a9",
    Color10Bold: "#5166b0",
    Color10Normal: "#5166b0",
    Color10Fade: "#5166b0"
  };

  GetTheme(): ThemeModel
  {
    return this.theme;
  }

  constructor() { }

}
