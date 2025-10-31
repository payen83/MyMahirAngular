import { Component } from '@angular/core';
import { SharedModules } from '../../shared/shared-modules';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Api } from '../../services/api';
import { Router } from '@angular/router';
import { Data } from '../../services/data';

@Component({
  selector: 'app-login-page',
  imports: [...SharedModules],
  templateUrl: './login-page.html',
  styleUrl: './login-page.scss',
})
export class LoginPage {
  public loginForm: FormGroup;
  public hidePassword: boolean = true;

  constructor(
    private fb: FormBuilder,
    private apiService: Api,
    private router: Router,
    private data: Data
  ){
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.pattern(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)]],
      password: ['', Validators.required]
    })
  }

  togglePassword(){
    this.hidePassword = !this.hidePassword;
  }

  async onSubmit(){
    try {
      const loginData: any = this.loginForm.value;
      const response: any = await this.apiService.httpPost('/auth/login', loginData);
      if(response.success){
        console.log('Student data added successfully');
        //Save token
        let token = response.token;
        if(token){
          this.data.setLocalStorage('token', token);
        }
        this.router.navigateByUrl('/students');
      } else {
        alert('Invalid email or password');
      }
    } catch(err: any){
      console.error(err.message);
      alert('Invalid username or password');
    }
  }
}
