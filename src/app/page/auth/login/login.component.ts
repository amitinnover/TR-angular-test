import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Login } from 'src/core/model/login';
import { AuthService } from 'src/core/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  isFormSubmitted = false;


  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private toastrService: ToastrService,
    private router : Router
  ) {}

  ngOnInit(): void {
    const emailPattern = '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,4}$';
    this.loginForm = this.formBuilder.group({
      email: new FormControl<string | null>('', [
        Validators.required,
        Validators.pattern(emailPattern),
      ]),
      password: new FormControl<string | null>('', [
        Validators.required,
        Validators.minLength(4),
      ]),
    });
  }

  submitDetail() {
    this.isFormSubmitted = true;
    if (this.loginForm.invalid) {
      return;
    }

    const login: Login = {
      email: this.formValue.email.value,
      password: this.formValue.password.value
    }

    this.authService.getLogin(login).subscribe(
      (res) => {
        if(res && res.body && res.body['data']){
          this.isFormSubmitted = false;
          this.toastrService.success(res.body['message']);
          this.router.navigate(['/home']);
        }
        else{
          this.toastrService.error(res.body!['message']);
        }
      },
      (error) => {
        console.log(error);
      }
    );
  }

  get formValue() {
    return this.loginForm.controls;
  }
}
