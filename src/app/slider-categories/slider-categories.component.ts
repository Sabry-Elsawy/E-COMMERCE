import { Component, OnInit } from '@angular/core';
import { ProductService } from '../core/service/product.service';
import { OwlOptions } from 'ngx-owl-carousel-o';
@Component({
  selector: 'app-slider-categories',
  templateUrl: './slider-categories.component.html',
  styleUrls: ['./slider-categories.component.scss']
})
export class SliderCategoriesComponent implements OnInit{
constructor(private _ProductService:ProductService){}
Categories:any[]=[]
ngOnInit(): void {
  this._ProductService.getAllCategories().subscribe({
    next:(response)=>{
     // console.log(response.data);
      this.Categories=response.data
    },
    error:(err)=>{
      console.log(err);
      
    }
  })
}

customOptions: OwlOptions = {
  loop: true,
  mouseDrag: false,
  touchDrag: false,
  pullDrag: false,
  dots: false,
  navSpeed: 700,
  navText: ['', ''],
  responsive: {
    0: {
      items: 2
    },
    400: {
      items: 3
    },
    740: {
      items: 4
    },
    940: {
      items: 7
    }
  },
  nav: true
}
}
