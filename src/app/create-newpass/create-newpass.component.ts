import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ForgotpasswordService } from '../core/service/forgotpassword.service';
import { Router } from '@angular/router';
   

@Component({
  selector: 'app-create-newpass',
  templateUrl: './create-newpass.component.html',
  styleUrls: ['./create-newpass.component.scss']
})
export class CreateNewpassComponent implements OnInit {
 






email: any = '';

  resetPassword: FormGroup;

  constructor(
    private _ForgotpasswordService: ForgotpasswordService, 
    private _Router: Router
  ) {
    this.resetPassword = new FormGroup({
      newPassword: new FormControl(null, Validators.required),
      email: new FormControl(null, Validators.required)
    });
  }

  ngOnInit(): void {
    this.getCurrentEmail();
  }

  getCurrentEmail() {
    this._ForgotpasswordService.currentEmail.subscribe({
      next: (response) => {
    
        this.email = response;
        // تحديث قيمة البريد الإلكتروني في النموذج
        this.resetPassword.get('email')?.setValue(this.email);
      //  console.log('Email fetched and set in form:', this.email);
      },
      error: (err) => {
        console.error('Error fetching email:', err);
      }
    });
  }

 

  saveNewPass() {
    if (this.resetPassword.valid) {
      // استخراج البريد الإلكتروني وكلمة المرور الجديدة من النموذج
      const email = this.resetPassword.get('email')?.value;
      const newPassword = this.resetPassword.get('newPassword')?.value;
  
      // تحقق من نوع البيانات المرسلة
      console.log('Type of email:', typeof email);
      console.log(' email:',   email);
      
      console.log('Type of newPassword:', typeof newPassword);
  
      // إنشاء الكائن الذي سيتم إرساله للـ API
      const formData = {
        email: email.email,  // التأكد من إرسال البريد الإلكتروني كنص
        newPassword: newPassword
      };
  
      console.log('Form Data being sent:', formData);
  
      this._ForgotpasswordService.resetPassword(formData).subscribe({
        next: (response) => {
         // console.log('Response from resetPassword:', response);
          localStorage.setItem('userToken', response.token);
          this._Router.navigate(['/home']);
        },
        error: (err) => {
          console.error('Error during password reset:', err);
          if (err.status === 404) {
            alert('There is no user with this email address.');
          } else if (err.status === 500) {
            alert('Internal Server Error. Please try again later.');
          } else {
            alert('An error occurred during the password reset process.');
          }
        }
      });
    } else {
      console.error('Form is invalid');
    }
  }


 
}

























 