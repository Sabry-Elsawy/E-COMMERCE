import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ForgotpasswordService } from '../core/service/forgotpassword.service';
import { Router } from '@angular/router';
  
@Component({
  selector: 'app-forgotpass-email',
  templateUrl: './forgotpass-email.component.html',
  styleUrls: ['./forgotpass-email.component.scss']
})
export class ForgotpassEmailComponent {


  isloading:boolean=false;

  constructor(private _ForgotpasswordService:ForgotpasswordService , private _Router:Router){}

  forgotpasswordEmail:FormGroup = new FormGroup({
    email:new FormControl(null , [Validators.required , Validators.email])
  })


  // email:any=''

  handleForgotPassEmail( ){
    // console.log(forgotpasswordEmail.value);
    this.isloading=true
   if (this.forgotpasswordEmail.valid) {
    this._ForgotpasswordService.ForgotPasswordEmail(this.forgotpasswordEmail.value).subscribe({
      next:(response)=>{
       // console.log(response);
        this.isloading=false;
        this._ForgotpasswordService.currentEmail.next(this.forgotpasswordEmail.value)
        this._Router.navigate(['/forgotpass-code'])
      },
      error:(err)=>{
        console.log(err);
        this.isloading=false
      }
    })
   }
  }

}
