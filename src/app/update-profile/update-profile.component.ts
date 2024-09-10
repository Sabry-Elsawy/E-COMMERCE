import { Component, OnInit } from '@angular/core';
import { AuthService } from '../core/service/auth.service';
import { ProfileService } from '../core/service/profile.service';
import { jwtDecode } from 'jwt-decode';
import { BehaviorSubject } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
     
@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.component.html',
  styleUrls: ['./update-profile.component.scss']
})
export class UpdateProfileComponent implements OnInit {
constructor(private _AuthService:AuthService , private _ProfileService:ProfileService){
  
}
 

updateProfileData:FormGroup =new FormGroup({
  name:new FormControl(null , [Validators.required , Validators.minLength(3) ,Validators.maxLength(10)]),
  email:new FormControl(null , [Validators.required , Validators.email]),
  phone:new FormControl(null , [Validators.required , Validators.pattern(/^01[0125][0-9]{8}$/)])
})


handelProfileData(updateProfileData:FormGroup){
  console.log(updateProfileData.value);
  this._ProfileService.updateProfileData(updateProfileData.value).subscribe({
    next:(response)=>{
      console.log(response);
      
    },
    error:(err)=>{
      console.log(err);
      
    }
  })
  
}


userData= new BehaviorSubject<any>(null);
userId:string=''
profileData:any;
ngOnInit(): void {
this.decodeUserData()
 
  this.getProfileData(this.userId)
}

decodeUserData(){
  let encoded=JSON.stringify(localStorage.getItem('userToken'))
  let decoded:any=  jwtDecode(encoded)
this.userId=decoded.id
//  console.log(decoded);
  this.userData.next(decoded)  
  
  }

getProfileData(profileId:string){
  this._ProfileService.getProfileData(profileId).subscribe({
    next:(response)=>{
      this.profileData=response.data
     // console.log(this.profileData);
    },
    error:(err)=>{
      console.log(err);
      
    }
  })
}


}
 

 
 
 
