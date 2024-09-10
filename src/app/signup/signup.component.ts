import { Component } from '@angular/core';
import { AuthService } from '../core/service/auth.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
    
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {

  constructor(private _AuthService:AuthService ,private _Router:Router){
    if (localStorage.getItem('userToken') !== null) {
      this._Router.navigate(['/home'])
    }
  }
  
  isLoading:boolean= false;
  apiError:string='';


  registerForm:FormGroup=new FormGroup({
    name:new FormControl(null , [Validators.required , Validators.minLength(3) ,Validators.maxLength(10)]),
    email:new FormControl(null , [Validators.required , Validators.email]),
    password:new FormControl(null , [Validators.required , Validators.pattern(/^[A-Z][a-z0-9]{5,10}$/)]),
    rePassword:new FormControl(null ,  [Validators.required , Validators.pattern(/^[A-Z][a-z0-9]{5,10}$/)]),
    phone:new FormControl(null , [Validators.required , Validators.pattern(/^01[0125][0-9]{8}$/)]),
  });

  handleRegister(registerForm:FormGroup){
    // console.log(registerForm);
    this.isLoading=true;
    if(registerForm.valid){
      this._AuthService.register(registerForm.value).subscribe({
        next:(responcse) => {
          if (responcse.message === 'success' ) {
            this.isLoading=false;
            this._Router.navigate(['/login'])
          }
        },
        error:(err) => {
          // console.log(err.error.errors.msg)
          this.isLoading=false;
          this.apiError=err.error.errors?.msg
        },
        complete:() => console.log('Done'),
        
        
      })
    }

  }

}
