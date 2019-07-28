import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sliderpipe'
})
export class SliderpipePipe implements PipeTransform {

  transform(value: any, selectedAge: number): any {
    return value.filter( p => p.age < selectedAge);
  }

}
