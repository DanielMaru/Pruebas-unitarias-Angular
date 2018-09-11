import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'userName'
})
export class UserNamePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    const splitValue = value.split('/');
    let transValue: String = '';
    splitValue.forEach((element, index) => {

      index === (splitValue.length - 1) ? transValue += element : transValue += element + ' ';

    });
    return transValue;
  }

}
