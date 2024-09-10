import { Component, OnInit } from '@angular/core';
import { OrderService } from '../core/service/order.service';
import { AuthService } from '../core/service/auth.service';
  
@Component({
  selector: 'app-allorders',
  templateUrl: './allorders.component.html',
  styleUrls: ['./allorders.component.scss']
})
export class AllordersComponent implements OnInit{
  allOrders:any[]=[] // Array to hold all orders data
  userAllOrders:any[]=[] // Array to hold specific user's orders data
 // userId:any='' // Variable to store the user ID
  decodeduserToken:any // Variable to store the decoded JWT token
  userData:any= localStorage.getItem('userData')
  userDataID=JSON.parse(this.userData)
constructor(private _OrderService:OrderService , private _AuthService:AuthService){}

ngOnInit(): void {
 this.getUserOrders(this.userDataID.id)
}


  // Method to fetch orders for a specific user
  getUserOrders(userId:any){
    this._OrderService.getUserOrders(userId).subscribe({
      
      next:(response)=>{
   
        // Assign the response data (user's orders) to the userAllOrders property
        this.userAllOrders=response
       // this.allOrders = response.map((order: any) => order.cartItems).flat();
     //   console.log(this.allOrders);
        
        console.log('all order',response);
        
      },
      error:(err)=>{
        console.log(err);
        
      }
    })
}




goBack(){
  history.back()
}
  


}
