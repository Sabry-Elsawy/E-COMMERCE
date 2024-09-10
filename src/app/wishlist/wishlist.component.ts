import { Component, OnInit } from '@angular/core';
import { WishlistService } from '../core/service/wishlist.service';
import { CartService } from '../core/service/cart.service';
import { ToastrService } from 'ngx-toastr';
   
@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})
export class WishlistComponent  implements OnInit{
constructor(private _WishlistService:WishlistService
  ,private _CartService:CartService,
  private _ToastrService:ToastrService
){}

wishList:any[]=[]

ngOnInit(): void {
 this.getWishlist()
}
  getWishlist(){
    this._WishlistService.getWishList().subscribe({
      next:(response)=>{
      //  console.log(response.data);
        this.wishList=response.data
      },
      error:(err)=>{
        console.log(err);
        
      }
    })
  }

removeItem(productId:string){
  this._ToastrService.info('Removing Product from wishlist')
  this._WishlistService.removeItem(productId).subscribe({
    next:(response)=>{
    //  console.log(response);
       this.wishList=response.data
       this._ToastrService.success('Product Removed successfully from your wishlist')
       this.getWishlist()
    },
    error:(err)=>{
      console.log(err);
      this._ToastrService.error('Failed to remove the product from your wishlist')
    }
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

   // Method to remove all items from the wishlist
   removeAllFav(){
    // Remove each item from the wishlist
    this.wishList.map((product) =>
      this.removeItem(product._id)
    );
  }



goBack(){
  history.back()
}
 
  


}
