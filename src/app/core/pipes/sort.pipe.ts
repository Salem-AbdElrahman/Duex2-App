import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(items: any[], sortOption: string): any[] {
    if (!items || !sortOption) return items;

    let [key, direction] = sortOption.split('-');


    if (key === 'name') key = 'title';

    return [...items].sort((a, b) => {
      let valueA = a[key];
      let valueB = b[key];


      if (typeof valueA === 'string') valueA = valueA.toLowerCase();
      if (typeof valueB === 'string') valueB = valueB.toLowerCase();

      if (valueA < valueB) return direction === 'asc' ? -1 : 1;
      if (valueA > valueB) return direction === 'asc' ? 1 : -1;
      return 0;
    });
  }
}
