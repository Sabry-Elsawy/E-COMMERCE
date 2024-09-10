import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CartService } from '../core/service/cart.service';
import { ToastrService } from 'ngx-toastr';
    
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

 

constructor(private _CartService:CartService , private _ToastrService:ToastrService){}
cartProducts:any;

 
 

ngOnInit(): void {
  this._CartService.GetLoggedusercart().subscribe({
    next:(respnse)=>{console.log(respnse.data);
      this.cartProducts=respnse.data
       
      
    },
    error:(err)=>console.log(err)
    
  })
}

removeItem(productId:string){
  this._ToastrService.info('Deleting Your product...')
  this._CartService.removeCartItem(productId).subscribe({
    next:(respnse)=>{console.log(respnse.data);
      this.cartProducts=respnse.data
      this._ToastrService.success('Product Removed successfully')
      this._CartService.numCartItems.next(respnse.numOfCartItems)
    },
    error:(err)=>{console.log(err)
      this._ToastrService.error('Product removal failed')
    }
  })
}


updateProductQuantity(productId:string ,  count:number){
  this._ToastrService.info('waiting')
  this._CartService.updateProductQuantity(productId , count).subscribe({
    next:(respnse)=>{console.log(respnse.data);
      this.cartProducts=respnse.data
      this._ToastrService.success(`You have ${count} pieces now`)
    },
    error:(err)=>{console.log(err);
      this._ToastrService.error('The operation failed to execute')

    }
  })
}

RemoveAllCartItems(){
  this._ToastrService.info('Deleting Your products...')
  this._CartService.removeAllCartItem().subscribe({
    next:(response)=>{
      console.log(response);
      this.cartProducts=response.data
      this._ToastrService.success('Products Removed successfully')
      this._CartService.numCartItems.next(response.numOfCartItems)
    },
    error:(err)=>{
      console.log(err);
      this._ToastrService.error('Products removal failed')
    }
  })
}


goBack(){
  history.back()
}


}
