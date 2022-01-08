import { Injectable, ElementRef } from '@angular/core';
import { validateMethods } from '../Enums/ValidateMethods';

@Injectable({
  providedIn: 'root'
})
export class ValidationService {

  constructor() {
  }

  validate(properties: any,validationType: validateMethods)
  {
    let result: boolean = false;
    switch (validationType)
    {
      case validateMethods.signin:
        result =  this.HaveCurrectLengh(properties,11,11) && this.IsPhoneNumber(properties) && this.IsNumber(properties);
        break;
      case validateMethods.caption:
        result = this.IsNotEmptyString(properties);
        break;
    }


    return result;
  }


  // lengh - start with 09 - only number - forbidden chars - only words

  private HaveCurrectLengh(item: string,minLength: number,maxLength: number)
  {
    if(item.length < minLength)
      {
        return false;
      }
      if(item.length > maxLength)
      {
        return false;
      }

    return true;
  }

  private IsPhoneNumber(item: string)
  {
    if ((item[0] != "0" || item[1] != "9"))
    {
      return false;
    }

    return true;
  }

  private IsNumber(item: string)
  {
    for (let i = 0;i< item.length;i++)
    {
      let asciiCode = item.charCodeAt(i);
      if(asciiCode < 48 || asciiCode > 57)
      {
        return false;
      }
    }

    return true;
  }

  private HaveForbiddenChars(item: string)
  {
    for (let i of item)
    {
      let asciiCode = i.charCodeAt(0);
      if (asciiCode == 62 || asciiCode == 60 || asciiCode == 40 || asciiCode == 41 || asciiCode == 91 || asciiCode == 93 || asciiCode == 123 || asciiCode == 125)
      {
        return false;
      }
    }

    return true
  }

  private HaveNoNumber(item: string)
  {
    for (let i = 0;i<item.length;i++)
      {
        let asciiCode = item.charCodeAt(i);
        if((asciiCode != 32) && (asciiCode <97 || asciiCode>122) && (asciiCode<65 || asciiCode>90))
        {
          return false;
          break;
        }
      }

      return true;
  }

  private IsNotEmptyString(item: string)
  {
    for(let i = 0;i < item.length; i++)
    {
      let asciiCode = item.charCodeAt(i);
      if(asciiCode != 32)
      {
        return true;
      }

    }

    return false;
  }
}
