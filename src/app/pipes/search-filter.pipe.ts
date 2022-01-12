import { Pipe, PipeTransform } from '@angular/core';
import {Item} from "../items/item";

@Pipe({
  name: 'searchFilter'
})
export class SearchFilterPipe implements PipeTransform {

  transform(items: Item[], filterString: string | undefined){
    if (items.length === 0 || filterString === '' || !filterString) {
      return items;
    }

    return items.filter((item) => {
      return item.name.toLowerCase().includes(filterString.toLowerCase());
    })
  }

}
