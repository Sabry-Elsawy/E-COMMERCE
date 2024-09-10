import { Component ,OnInit} from '@angular/core';
import { ProductService } from '../core/service/product.service';
import { CartService } from '../core/service/cart.service';
import { WishlistService } from '../core/service/wishlist.service';
import { ToastrService } from 'ngx-toastr';
   
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
constructor(private _ProductService:ProductService
  ,private _CartService:CartService,
  private _WishlistService:WishlistService,
  private _ToastrService:ToastrService
){}

products:any[]=[]


ngOnInit(): void {
  this._ProductService.getproductHome().subscribe(
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
    
    next:(respnse)=>{//console.log(respnse);

      this._ToastrService.success('Product added successfully to your cart')
      this._CartService.numCartItems.next(respnse.numOfCartItems)
    },
    error:(err)=>
      {console.log(err)
        this._ToastrService.error('Failed to add the product to your  cart')
      }
    
  })
}


addToWishList(productId:string){
  this._ToastrService.info('Adding your product...')
  this._WishlistService.addToWishList(productId).subscribe({
    next:(response)=>{
     // console.log(response);
     this._ToastrService.success('Product added successfully to your wishlist')
    },
    error:(err)=>{
      console.log(err);
      this._ToastrService.error('Failed to add the product to your  wishlist')
    }
  })
}

}
