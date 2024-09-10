import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode';
import { BehaviorSubject, Observable } from 'rxjs';
   
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userData= new BehaviorSubject<any>(null);

  
  baseUrl:string='https://ecommerce.routemisr.com/api/v1/auth/'
  constructor(private _HttpClient:HttpClient , private _Router:Router) { 
    if(localStorage.getItem('userToken') !== null){
      this.decodeUserData()
       
    }
 
  }

  register(userData:object):Observable<any>
  {
    return this._HttpClient.post(this.baseUrl + 'signup' , userData)
  }
  login(userData:object):Observable<any>
  {
    return this._HttpClient.post(this.baseUrl + 'signin' , userData)
  }


 

  decodeUserData(){
  let encoded=JSON.stringify(localStorage.getItem('userToken'))
  let decoded=  jwtDecode(encoded)
  localStorage.setItem('userData' ,  JSON.stringify(decoded))
  // console.log(decoded);
  this.userData.next(decoded)  
  
  }

  logOut()
  {
    localStorage.removeItem('userToken')
    this.userData.next(null)
    this._Router.navigate(['/login'])
  }
}
