import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/retry';
import { Observable } from 'rxjs/Observable';
import { environment } from '../../../environments/environment';
import { Exercise } from '../class/exercises';
import { Workout } from '../class/workout';

@Injectable()
export class FitnessService {

  private baseUrl = environment.fitnessApiUrl;

  constructor(private http: HttpClient) {
  }

  getAllWorkouts(): Observable<Workout[]> {
    return this.http.get<Workout[]>(this.baseUrl + '/workouts/');
  }

  createExercise(exercise: Exercise): void {
    this.http.post(this.baseUrl + '/exercises', exercise);
  }

  createWorkout(workout: Workout): void {
    this.http.post(this.baseUrl + '/workouts', workout);
  }

  createLog(workoutId: number): void {
    this.http.post(this.baseUrl + '/logs', workoutId);
  }

}
