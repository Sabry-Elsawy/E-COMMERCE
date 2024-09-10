import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
 
@Injectable({
  providedIn: 'root'
})
export class ForgotpasswordService {

  constructor(private _HttpClient:HttpClient) { }
currentEmail=new BehaviorSubject(null)
  ForgotPasswordEmail(forgotpasswordEmail:any):Observable<any>{
    return this._HttpClient.post(`https://ecommerce.routemisr.com/api/v1/auth/forgotPasswords`,forgotpasswordEmail)
  }


  RestCode(RestCode:any):Observable<any>{
    return this._HttpClient.post(`https://ecommerce.routemisr.com/api/v1/auth/verifyResetCode`,RestCode)
  }

 
  // Resets the user's password using the email and new password provided
  resetPassword(resetPass:any): Observable<any> {
    return this._HttpClient.put('https://ecommerce.routemisr.com/api/v1/auth/resetPassword',
     resetPass
    );
   }
}
