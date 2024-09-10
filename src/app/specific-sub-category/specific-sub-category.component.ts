import { Component, OnInit } from '@angular/core';
import { ProductService } from '../core/service/product.service';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../core/service/cart.service';
import { ToastrService } from 'ngx-toastr';
import { WishlistService } from '../core/service/wishlist.service';
   
@Component({
  selector: 'app-specific-sub-category',
  templateUrl: './specific-sub-category.component.html',
  styleUrls: ['./specific-sub-category.component.scss']
})
export class SpecificSubCategoryComponent implements OnInit {
constructor(private _ProductService:ProductService , private _ActivatedRoute:ActivatedRoute , private _WishlistService:WishlistService ,private _CartService:CartService , private _ToastrService:ToastrService){}

specificSubCategoryId:any;
specificSubCategory:any[]=[]
ngOnInit(): void {
  this._ActivatedRoute.paramMap.subscribe((params)=>{ 
    this.specificSubCategoryId=params.get('id')
  })

  this._ProductService.getSpecificSubCategory(this.specificSubCategoryId).subscribe({
    next:(response)=>{
      //console.log(response.data);
      this.specificSubCategory=response.data
    },
    error:(err)=>{
      console.log(err);
      
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
