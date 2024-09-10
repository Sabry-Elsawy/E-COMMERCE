import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CategoriesComponent } from './categories/categories.component';
import { CartComponent } from './cart/cart.component';
import { BrandsComponent } from './brands/brands.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductsComponent } from './products/products.component';
import { authGuard } from './core/service/guard/auth.guard';
import { SpecificSubCategoryComponent } from './specific-sub-category/specific-sub-category.component';
  
import { WishlistComponent } from './wishlist/wishlist.component';
import { AllordersComponent } from './allorders/allorders.component';
import { SpecificBrandComponent } from './specific-brand/specific-brand.component';
import { UpdateProfileComponent } from './update-profile/update-profile.component';
import { ProfileComponent } from './profile/profile.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { AddAddressComponent } from './add-address/add-address.component';
import { ForgotpassEmailComponent } from './forgotpass-email/forgotpass-email.component';
import { ForgotpassCodeComponent } from './forgotpass-code/forgotpass-code.component';
import { CreateNewpassComponent } from './create-newpass/create-newpass.component';
 
const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home',canActivate:[authGuard] ,  component:HomeComponent  },
  { path: 'categories' ,canActivate:[authGuard] ,  component: CategoriesComponent  },
  { path: 'cart' ,canActivate:[authGuard] ,  component: CartComponent  },
  { path: 'brands' ,canActivate:[authGuard] ,  component: BrandsComponent  },
  { path: 'productdetails/:id' ,canActivate:[authGuard] ,  component:  ProductDetailsComponent  },
  { path: 'products' ,canActivate:[authGuard] ,  component:   ProductsComponent  },
  { path: 'specific-SubCategory/:id' ,canActivate:[authGuard] ,  component:   SpecificSubCategoryComponent  },
  { path: 'specific-brand/:id' ,canActivate:[authGuard] ,  component:   SpecificBrandComponent  },
  {path:'wishlist' , canActivate:[authGuard], component:WishlistComponent},
  {path:'allorders' , canActivate:[authGuard], component:AllordersComponent },
  {path:'profile' , canActivate:[authGuard], component:ProfileComponent , children:[
    {path:'' , redirectTo:'updateProfile' ,pathMatch:'full' },
    {path:'updateProfile' , component:UpdateProfileComponent },
    {path:'change-pass' , component:ChangePasswordComponent },
    {path:'Add-address' , component:AddAddressComponent },
    { path: '**', component:NotFoundComponent   },
  ] },
 
  { path: 'login'  , component:LoginComponent   },
  { path: 'forgotpass-email'  , component:ForgotpassEmailComponent   },
  { path: 'forgotpass-code'  , component:ForgotpassCodeComponent   },
  { path: 'CreatePassword'  , component:CreateNewpassComponent   },
  { path: 'signup', component:  SignupComponent },
  { path: '**', component:NotFoundComponent   },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
