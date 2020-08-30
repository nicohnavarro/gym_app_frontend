import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateFormat'
})
export class DateFormatPipe implements PipeTransform {

  transform(fecha:string): string {
    
      let formatDate = new Date(fecha);
    
    let day = formatDate.getDate();
    let mouth = formatDate.getMonth()+1
    let year = formatDate.getFullYear()
    return `${day}/${mouth}/${year}`

  }

}
