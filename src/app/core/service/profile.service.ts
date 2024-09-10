import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
  
 
@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  header:any={token : localStorage.getItem('userToken')}
baseUrl:string='https://ecommerce.routemisr.com';

  constructor(private _HttpClient:HttpClient) { }
 

  getProfileData(profileId:string):Observable<any>{
    return this._HttpClient.get(`https://ecommerce.routemisr.com/api/v1/users/${profileId}`)
  }


  updateProfileData(updateProfileData:any):Observable<any>{
    return this._HttpClient.put(`${this.baseUrl}/api/v1/users/updateMe/` ,
      {updateProfileData:updateProfileData},
      {headers:this.header }
    )
  }
  

  changePassword(data: { currentPassword: string; password: string; rePassword: string }):Observable<any>{
    return this._HttpClient.put(`${this.baseUrl}/api/v1/users/changeMyPassword` ,
      data,
      {headers:this.header }
    )
  }

  AddAddress(AddAddress:any):Observable<any>{
    return this._HttpClient.post(`${this.baseUrl}/api/v1/addresses`,AddAddress,
      {headers:this.header}
    )
  }

 GetAddAddress():Observable<any>{
    return this._HttpClient.get(`${this.baseUrl}/api/v1/addresses`,
      {headers:this.header}
    )
  }
}






