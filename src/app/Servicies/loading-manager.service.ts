import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoadingManagerService {

  private IsLoading: boolean = false;

  constructor() { }


  SetLoader()
  {
    this.IsLoading = true;
  }

  ResetLoader()
  {
    this.IsLoading = false;
  }


  GetLoader(): boolean
  {
    return this.IsLoading;
  }
}
