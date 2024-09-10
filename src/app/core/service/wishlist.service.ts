import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {
  header:any={token : localStorage.getItem('userToken')}
  constructor(private _HttpClient:HttpClient) { }

  addToWishList(productId:string):Observable<any>{
    return this._HttpClient.post('https://ecommerce.routemisr.com/api/v1/wishlist',
      {productId:productId},
      {headers:this.header}
    )
  }

  getWishList():Observable<any>{
    return this._HttpClient.get('https://ecommerce.routemisr.com/api/v1/wishlist',
      {headers:this.header}
    )
  }

  removeItem(ProductId:string):Observable<any>{
    return this._HttpClient.delete(`https://ecommerce.routemisr.com/api/v1/wishlist/${ProductId}`,
      {headers:this.header}
    )
  }

 
}
