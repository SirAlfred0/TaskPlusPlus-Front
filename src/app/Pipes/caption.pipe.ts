import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'caption'
})
export class CaptionPipe implements PipeTransform {

  transform(value: string, limit: number) {
    return value.length > limit ? value.substr(0, limit) : value;
  }

}
