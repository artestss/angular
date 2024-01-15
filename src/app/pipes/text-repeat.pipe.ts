import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'textRepeat'
})
export class TextRepeatPipe implements PipeTransform {
  transform(value: string, count: number) {

    return value.repeat(count)
  }
}
