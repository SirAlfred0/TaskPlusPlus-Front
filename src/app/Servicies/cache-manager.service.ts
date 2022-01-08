import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CacheManagerService {

  private accessCode:any = "";

  constructor() { }


  Set(key: string,value: string)
  {
    try{
      localStorage.setItem(key,value);
    }catch{
      const LoginDetails = localStorage.getItem('LD');
      localStorage.clear();

      if(LoginDetails != null)
      localStorage.setItem('LD',LoginDetails);

      localStorage.setItem(key,value);
    }
  }


  SetLoginDetails(value: string)
  {
    this.accessCode = value;
    try{
      localStorage.setItem('LD',value);
    }catch{

      localStorage.clear();
      localStorage.setItem('LD',value);
    }
  }

  ResetLoginDetails()
  {
    localStorage.clear();
    this.accessCode = "";
  }

  GetLoginDetails()
  {
    if(this.accessCode == "")
      {
        this.accessCode = localStorage.getItem('LD')
      }
      if(this.accessCode == null) this.accessCode = "";

      return this.accessCode;
  }


  Get(key: string)
  {
    const data = localStorage.getItem(key);

    if(data != null) return data;

    return '[]';
  }
}



