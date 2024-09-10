import { Component, OnInit } from '@angular/core';
import { ProductService } from '../core/service/product.service';
import { ActivatedRoute } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { CartService } from '../core/service/cart.service';
import { WishlistService } from '../core/service/wishlist.service';
import { ToastrService } from 'ngx-toastr';
   
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
constructor(
  private _ProductService:ProductService,
  private _ActivatedRoute:ActivatedRoute,
  private _CartService:CartService,
  private _WishlistService:WishlistService,
  private _ToastrService:ToastrService
){}

productsDetails:any
productId:any;

ngOnInit(): void {
  this._ActivatedRoute.paramMap.subscribe(
    {
      next:(res)=>{//console.log(res.get('id'))
      this.productId=res.get('id')
      }
    }
  )
  this._ProductService.getProductsDetails(this.productId).subscribe({
    next:(response)=>{//console.log(response.data);
     this.productsDetails=response.data
    },
    error:(err)=>console.log(err)
    
  })
}


addToCart(productId:string){
  this._ToastrService.info('Adding your product...')
  this._CartService.addToCart(productId).subscribe({
    next:(respnse)=>{//console.log(respnse);
      this._ToastrService.success('Product added successfully to your cart')
      this._CartService.numCartItems.next(respnse.numOfCartItems)
    },
    error:(err)=>{console.log(err)
    this._ToastrService.error('Failed to add the product to your  cart')
    }
  })
}


addToWishList(productId:string){
  this._ToastrService.info('Adding your product...')
  this._WishlistService.addToWishList(productId).subscribe({
    next:(response)=>{
    //  console.log(response);
    this._ToastrService.success('Product added successfully to your wishlist')
    },
    error:(err)=>{
      console.log(err);
      this._ToastrService.error('Failed to add the product to your  wishlist')
    }
  })
}



customOptions: OwlOptions = {
  loop: true,
  mouseDrag: true,
  touchDrag: false,
  pullDrag: false,
  dots: false,
  navSpeed: 700,
  navText: ['', ''],
  responsive: {
    0: {
      items: 1
    },
    
  },
  nav: true
}

goBack(){
  history.back()
}

}




 