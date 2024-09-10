import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(products: any[], SearhTerm: string):  any[] {
    return products.filter((product)=>product.title.toLowerCase().includes(SearhTerm.toLowerCase()));
  }

}
