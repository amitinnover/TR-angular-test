import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/core/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;
  isFormSubmitted = false;


  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    const emailPattern = '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,4}$';
    this.registerForm = this.formBuilder.group({
      name:new FormControl<string | null>('',[Validators.required]),
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
    if (this.registerForm.invalid) {
      return;
    }
  }

  get registerFormValue() {
    return this.registerForm.controls;
  }

}
