import { Product } from './../models/product';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterPipe'
})
export class FilterPipePipe implements PipeTransform {

  transform(value: Product[], filterText:string): Product[] {
    filterText=filterText?filterText.toLowerCase():"";
    return filterText?value.filter(p=>p.productName.toLocaleLowerCase().indexOf(filterText)!==-1):value;
  }

}
