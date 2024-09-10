import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
   
@Injectable({
  providedIn: 'root'
})
export class CartService implements OnInit {
  numCartItems = new BehaviorSubject(0)
 ngOnInit(): void {
 
 }
 
  constructor(private _HttpClient:HttpClient) {
    this.GetLoggedusercart().subscribe({
      next:(data)=>{
        this.numCartItems.next(data.numOfCartItems)
      },
      error:(err)=>{
        console.log(err);
        
      }
     })
   }
header:any={token : localStorage.getItem('userToken')}

  addToCart(productId:string):Observable<any>{
    return this._HttpClient.post('https://ecommerce.routemisr.com/api/v1/cart',
      {productId:productId},
      {headers:this.header }
    )
  }
  GetLoggedusercart( ):Observable<any>{
    return this._HttpClient.get('https://ecommerce.routemisr.com/api/v1/cart',
      {headers:this.header }
    )
  }
  removeCartItem(productId:string):Observable<any>{
    return this._HttpClient.delete(`https://ecommerce.routemisr.com/api/v1/cart/${productId}`,
      {headers:this.header }
    )
  }
  removeAllCartItem():Observable<any>{
    return this._HttpClient.delete(`https://ecommerce.routemisr.com/api/v1/cart`,
      {headers:this.header }
    )
  }
  updateProductQuantity(productId:string , count:number):Observable<any>{
    return this._HttpClient.put(`https://ecommerce.routemisr.com/api/v1/cart/${productId}`,
      {count:count},
      {headers:this.header}
    )
  }


  onlinePayment(shippingAddress:any , cartId:string):Observable<any>{
    return this._HttpClient.post(`https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${cartId}?url=http://localhost:4200`,
      {shippingAddress:shippingAddress},
      {headers:this.header}
    )
  }


  CashOrder(shippingAddress:any ,cartId:string):Observable<any>{
    return this._HttpClient.post(`https://ecommerce.routemisr.com/api/v1/orders/${cartId}`,
      {shippingAddress:shippingAddress},
      {headers:this.header}
    )
  }


}
