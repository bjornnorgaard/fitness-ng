import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgMaterialModule } from '../ng-material/ng-material.module';
import { ExerciseComponent } from './exercise/exercise.component';
import { HomeComponent } from './home/home.component';
import { AppModule } from '../app.module';
import { WorkoutComponent } from './workout/workout.component';

@NgModule({
  imports: [
    CommonModule,
    NgMaterialModule,
    AppModule
  ],
  declarations: [HomeComponent, WorkoutComponent, ExerciseComponent],
})
export class HomeModule {
}
