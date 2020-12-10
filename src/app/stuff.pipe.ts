import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'stuff',
  pure: true,
})
export class StuffPipe implements PipeTransform {
  transform(value: string): unknown {
    return `Hello ${value}!`;
  }
}
