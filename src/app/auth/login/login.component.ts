import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FitnessService } from '../../shared/service/fitness.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginFormGroup: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router, private fitnessService: FitnessService) {
    this.loginFormGroup = formBuilder.group({
      'username': [null, Validators.compose([
        Validators.required
      ])],
      'password': [null, Validators.compose([
        Validators.required
      ])]
    });
  }

  login() {
    const username = this.loginFormGroup.controls['username'].value as string;
    const password = this.loginFormGroup.controls['password'].value as string;
    console.log('username: ' + username);
    console.log('password: ' + password);
    this.router.navigate(['/']);
  }
}
