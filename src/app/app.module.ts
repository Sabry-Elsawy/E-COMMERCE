import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProductsComponent } from './products/products.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { BrandsComponent } from './brands/brands.component';
import { CategoriesComponent } from './categories/categories.component';
import { CartComponent } from './cart/cart.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import {BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { CarouselModule } from 'ngx-owl-carousel-o';
import { MainSliderComponent } from './main-slider/main-slider.component';
import { SliderCategoriesComponent } from './slider-categories/slider-categories.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { SpecificSubCategoryComponent } from './specific-sub-category/specific-sub-category.component';
 
import { WishlistComponent } from './wishlist/wishlist.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { AllordersComponent } from './allorders/allorders.component';
import { SpecificBrandComponent } from './specific-brand/specific-brand.component';
import { SearchPipe } from './search.pipe';
import { UpdateProfileComponent } from './update-profile/update-profile.component';
import { ProfileComponent } from './profile/profile.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { AddAddressComponent } from './add-address/add-address.component';
import { ForgotpassEmailComponent } from './forgotpass-email/forgotpass-email.component';
import { ForgotpassCodeComponent } from './forgotpass-code/forgotpass-code.component';
import { CreateNewpassComponent } from './create-newpass/create-newpass.component';
import { ToastrModule } from 'ngx-toastr';
import { provideAnimations } from '@angular/platform-browser/animations';

import { provideToastr } from 'ngx-toastr';
 
@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    HomeComponent,
    NotFoundComponent,
    ProductsComponent,
    ProductDetailsComponent,
    BrandsComponent,
    CategoriesComponent,
    CartComponent,
    NavbarComponent,
    FooterComponent,
    MainSliderComponent,
    SliderCategoriesComponent,
    SpecificSubCategoryComponent,
    SpecificBrandComponent,
    WishlistComponent,
    CheckOutComponent,
    AllordersComponent,
    SearchPipe,
    UpdateProfileComponent,
    ProfileComponent,
    ChangePasswordComponent,
    AddAddressComponent,
    ForgotpassEmailComponent,
    ForgotpassCodeComponent,
    CreateNewpassComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CarouselModule,
    NgxPaginationModule,
    FormsModule,
    ToastrModule.forRoot()
  ],
  providers: [
    provideAnimations(), // required animations providers
    provideToastr(), // Toastr providers
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
