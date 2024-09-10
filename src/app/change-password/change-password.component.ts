import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProfileService } from '../core/service/profile.service';
import { ToastrService } from 'ngx-toastr';

  
@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent {

constructor(private _ProfileService:ProfileService , private _ToastrService:ToastrService){}

  changePassword:FormGroup = new FormGroup({
    // currentPassword:new FormControl('Sabry2004'),
     currentPassword:new FormControl(null , [Validators.required , Validators.pattern(/^[A-Z][a-z0-9]{5,10}$/)]),
    password:new FormControl(null , [Validators.required , Validators.pattern(/^[A-Z][a-z0-9]{5,10}$/)]),
    rePassword:new FormControl(null , [Validators.required , Validators.pattern(/^[A-Z][a-z0-9]{5,10}$/)]),
  }, {validators: this.repasswordMatch})


  repasswordMatch(changePassword:any){
    let passwordControl =changePassword.get('password')
    let repasswordControl =changePassword.get('rePassword')
    if (passwordControl?.value == repasswordControl?.value) {
      return null;
    }
    else
    {
      repasswordControl?.setErrors({passwordMatch : 'password and Repassword not match'})
      return {passwordMatch : 'password and Repassword not match'};
    }
  }


// handleChangePassword( ){
//   // console.log(changePassword.value);
//  if (localStorage.getItem('userToken')) {
//   this._ProfileService.changePassword(this.changePassword.value).subscribe({
//     next:(response)=>{
//      if (response.message === 'success') {
//       console.log(response);
//       localStorage.setItem('userToken' , response.token)
//      }
//     },
//     error:(err)=>{
//       console.log(err);
      
//     }
//   })
//  }
// }


handleChangePassword(changePassword:FormGroup ){
  // console.log(changePassword.value);
 if (localStorage.getItem('userToken')) {
  this._ProfileService.changePassword(changePassword.value).subscribe({
    next:(response)=>{
       this._ToastrService.success('The password has been changed successfully')
     if (response.message === 'success') {
      
      console.log(response);
      localStorage.setItem('userToken' , response.token)
     }
    },
    error:(err)=>{
      console.log(err);
      this._ToastrService.error(err.error?.errors?.msg)
    }
  })
 }
}

}
