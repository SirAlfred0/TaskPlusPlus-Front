import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'CountControl'
})
export class CountControlPipe implements PipeTransform {

  transform(value: string) {
    return Number.parseInt(value) > 99 ? '+99' : value;
  }

}
