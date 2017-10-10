import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgMaterialModule } from '../ng-material/ng-material.module';
import { LoginComponent } from './login/login.component';

@NgModule({
  imports: [
    CommonModule,
    NgMaterialModule,
  ],
  declarations: [LoginComponent]
})
export class AuthModule {
}
