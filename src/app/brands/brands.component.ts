import { Component, OnInit } from '@angular/core';
import { BrandsService } from '../core/service/brands.service';
 
@Component({
  selector: 'app-brands',
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.scss']
})
export class BrandsComponent implements OnInit {
constructor(private _BrandsService:BrandsService){}

allBrands:any[]=[];
isExpanded: boolean = false;

ngOnInit(): void {
  this._BrandsService.getBrands().subscribe({
    next:(response)=>{
      console.log(response.data);
      this.allBrands=response.data
    },
    error:(err)=>{
      console.log(err);
      
    }
  })
}

toggleBrands(): void {
  this.isExpanded = !this.isExpanded; // تبديل حالة التوسع
}
}
