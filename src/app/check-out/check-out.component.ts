import { Component, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CartService } from '../core/service/cart.service';
import { Router } from '@angular/router';
     
@Component({
  selector: 'app-check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.scss']
})
export class CheckOutComponent {

  @Input() dataFromParent:any;

  constructor(private _CartService:CartService , private _Router:Router){}

  shippingAddress:FormGroup = new FormGroup({
    details:new FormControl (null , [Validators.required]),
    phone:new FormControl (null , [Validators.required , Validators.pattern(/^01[0125][0-9]{8}$/)]),
    city:new FormControl (null , [Validators.required])
  })

  navigateToPage(url:string){
    window.location.href=url
  }
  

  handelCheckOut(shippingAddress:FormGroup){
   console.log(shippingAddress);
   this._CartService.onlinePayment(shippingAddress.value , this.dataFromParent._id).subscribe({
    next:(response)=>{
      console.log(response);
      
      this.navigateToPage(response.session.url)
     // console.log(response.session.url);
       
    },
    error:(err)=>{
      console.log(err);
      
    }
   })
   
  }



  cashOrder(shippingAddress:FormGroup){
    this._CartService.CashOrder(shippingAddress.value , this.dataFromParent._id).subscribe({
      next:(response)=>{
       // console.log(response);
        this._Router.navigate(['/allorders'])
      },
      error:(err)=>{
        console.log(err);
        
      }
    })
  }

}
