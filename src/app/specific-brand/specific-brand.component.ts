import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BrandsService } from '../core/service/brands.service';
import { CartService } from '../core/service/cart.service';
import { ToastrService } from 'ngx-toastr';
import { WishlistService } from '../core/service/wishlist.service';
 
     
  
@Component({
  selector: 'app-specific-brand',
  templateUrl: './specific-brand.component.html',
  styleUrls: ['./specific-brand.component.scss'],
})
export class SpecificBrandComponent implements OnInit {
  constructor(
    private _ActivatedRoute: ActivatedRoute,
    private _BrandsService: BrandsService,
    private _CartService:CartService,
    private _ToastrService:ToastrService,
    private _WishlistService:WishlistService
  ) {}

  brandsId: any;
  specificBrands:any[]=[]

  ngOnInit(): void {
    this._ActivatedRoute.paramMap.subscribe((params) => {
      this.brandsId = params.get('id');
    });
    this._BrandsService.getSpecificBrands(this.brandsId).subscribe({
      next:(response)=>{
       // console.log(response.data);
        this.specificBrands=response.data
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
