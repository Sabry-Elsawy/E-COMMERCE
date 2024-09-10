import { Component, OnInit } from '@angular/core';
import { ProductService } from '../core/service/product.service';
 
@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit{
constructor(private _ProductService:ProductService){}

Categories:any[]=[]

ngOnInit(): void {
  this._ProductService.getAllCategories().subscribe({
    next:(response)=>{
      console.log(response.data);
      this.Categories=response.data
    },
    error:(err)=>{
      console.log(err);
      
    }
  })
}
}
