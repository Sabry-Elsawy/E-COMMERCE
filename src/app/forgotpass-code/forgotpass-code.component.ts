import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ForgotpasswordService } from '../core/service/forgotpassword.service';
import { Router } from '@angular/router';
  
@Component({
  selector: 'app-forgotpass-code',
  templateUrl: './forgotpass-code.component.html',
  styleUrls: ['./forgotpass-code.component.scss']
})
export class ForgotpassCodeComponent {
isloading:boolean=false;
constructor(private _ForgotpasswordService:ForgotpasswordService , private _Router:Router) {}
  RestCode:FormGroup = new FormGroup({
    resetCode:new FormControl(null , [Validators.required])
  })


  handleRestcode(RestCode:FormGroup){
    // console.log(RestCode.value);
    this.isloading=true;
    this._ForgotpasswordService.RestCode(RestCode.value).subscribe({
      next:(response)=>{
      //  console.log(response);
        this._Router.navigate(['/CreatePassword'])
        this.isloading=false;
      },
      error:(err)=>{
        console.log(err);
        this.isloading=false;
      }
    })
  }

}
