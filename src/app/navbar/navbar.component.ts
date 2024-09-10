import { Component, OnInit } from '@angular/core';
import { AuthService } from '../core/service/auth.service';
import { CartService } from '../core/service/cart.service';
import { ProfileService } from '../core/service/profile.service';
import { BehaviorSubject } from 'rxjs';
import { jwtDecode } from 'jwt-decode';
     
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  isLogin:boolean=false;
  cartNumbers:number=0;
 
  constructor(private _AuthService:AuthService ,private _CartService:CartService , private _ProfileService:ProfileService){
 
     _AuthService.userData.subscribe({
      next:()=>{
        if (_AuthService.userData.getValue() !== null) {
          this.isLogin=true
        }
        else
        {
          this.isLogin=false
        }
      }
     })
  }

  ngOnInit(): void {
    this._CartService.numCartItems.subscribe({
      next:(x)=>this.cartNumbers=x
    })
//====================================================

this.decodeUserData()
 
  this.getProfileData(this.userId)

  //=================================================
    
  }

  logOut(){
    this._AuthService.logOut()
  }




  userData= new BehaviorSubject<any>(null);
userId:string=''
profileData:any;
 

decodeUserData(){
  let encoded=JSON.stringify(localStorage.getItem('userToken'))
  let decoded:any=  jwtDecode(encoded)
this.userId=decoded.id
 // console.log(decoded);
  this.userData.next(decoded)  
  
  }

getProfileData(profileId:string){
  this._ProfileService.getProfileData(profileId).subscribe({
    next:(response)=>{
      this.profileData=response.data
    //  console.log(this.profileData);
    },
    error:(err)=>{
      console.log(err);
      
    }
  })
}

}
