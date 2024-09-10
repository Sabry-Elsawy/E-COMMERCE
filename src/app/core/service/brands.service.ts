import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BrandsService {

  constructor(private _HttpClient:HttpClient) { }

getBrands():Observable<any>{
  return this._HttpClient.get('https://ecommerce.routemisr.com/api/v1/brands?limit=50')
}

getSpecificBrands(brandId:string):Observable<any>{
  return this._HttpClient.get(`https://ecommerce.routemisr.com/api/v1/products?brand[in]=${brandId}`)
}
}
