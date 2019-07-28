import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mypipe'
})
export class MypipePipe implements PipeTransform {

  transform(value: string, times: number): string {
    let ret = '';
    for ( let i = 0; i < times ; i++) {
      if (i % 2 !== 0) {
        const str = value.split('').reverse().join('');
        ret = ret + `+ ${str}`;
      } else {
        ret = ret + `+ ${value}`;
      }
    }
    return ret;
  }

}
