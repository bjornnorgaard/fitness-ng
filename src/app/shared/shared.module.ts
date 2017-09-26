import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FitnessService } from './service/fitness.service';
import { HttpModule } from '@angular/http';

@NgModule({
  imports: [
    CommonModule,
    HttpModule
  ],
  declarations: [],
  providers: [FitnessService]
})
export class SharedModule {
}
