import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProfileService } from '../core/service/profile.service';
  
@Component({
  selector: 'app-add-address',
  templateUrl: './add-address.component.html',
  styleUrls: ['./add-address.component.scss']
})
export class AddAddressComponent implements OnInit{

  constructor(private _ProfileService:ProfileService){}
Address:any[]=[];


  AddAddress:FormGroup =new FormGroup({
    name:new FormControl(null , [Validators.required , Validators.minLength(3) ,Validators.maxLength(10)]),
    city:new FormControl(null , [Validators.required , Validators.minLength(3) ,Validators.maxLength(10)]),
    phone:new FormControl(null , [Validators.required , Validators.pattern(/^01[0125][0-9]{8}$/)]),
    details:new FormControl(null , [Validators.required])
  })
  
handleAddAdress(AddAddress:FormGroup){
  // console.log(AddAddress.value);
  this._ProfileService.AddAddress(AddAddress.value).subscribe({
    next:(response)=>{
      console.log(response);
      this.Address=response.data
      this.resetInput()
    },
    error:(err)=>{
      console.log(err);
      
    }
  })
}


ngOnInit(): void {
  this._ProfileService.GetAddAddress().subscribe({
    next:(response)=>{
      console.log(response);
      this.Address=response.data
    }
  })
}


resetInput(){
  this.AddAddress.reset()
}

}
