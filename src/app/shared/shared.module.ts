import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FitnessService } from './service/fitness.service';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  declarations: [],
  providers: [FitnessService]
})
export class SharedModule {
}
