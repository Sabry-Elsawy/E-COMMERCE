import { Component, OnInit } from '@angular/core';
import { ProductService } from '../core/service/product.service';
import { CartService } from '../core/service/cart.service';
import { WishlistService } from '../core/service/wishlist.service';
import { ToastrService } from 'ngx-toastr';
   
   
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit{
constructor(private _ProductService:ProductService , private _CartService:CartService , private _WishlistService:WishlistService , private _ToastrService:ToastrService){}
SearhTerm:string='';
products:any[]=[]
currentPage: number = 1;
itemsPerPage: number = 6;



ngOnInit(): void {
  this._ProductService.getAllProducts().subscribe(
    {
      next:(response)=> {
       // console.log(response.data);
        this.products=response.data
      }
    }
  )
}


addToCart(productId:string){
  this._ToastrService.info('Adding your product...')
  this._CartService.addToCart(productId).subscribe({
    next:(respnse)=>{console.log(respnse);
      this._CartService.numCartItems.next(respnse.numOfCartItems)
      this._ToastrService.success('Product added successfully to your cart')
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

goBack(){
  history.back()
}

}
