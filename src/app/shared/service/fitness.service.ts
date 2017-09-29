import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/retry';
import { Observable } from 'rxjs/Observable';
import { environment } from '../../../environments/environment';
import { Workout } from '../class/workout';

@Injectable()
export class FitnessService {

  private baseUrl = environment.fitnessApiUrl;

  constructor(private http: HttpClient) {
  }

  getWorkout(id: string): Observable<Workout> {
    return this.http.get<Workout>(this.baseUrl + '/workouts/' + id);
  }
}
