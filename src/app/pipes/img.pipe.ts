import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'img'
})
export class ImgPipe implements PipeTransform {

  transform(value: string): string {
   if (value === ''){
    return value = ('no-image.jpg')

   }else{
     return value;
   }

  }

}
