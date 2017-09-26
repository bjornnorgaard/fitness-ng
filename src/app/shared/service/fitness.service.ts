import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Workout } from '../class/workout';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

@Injectable()
export class FitnessService {

  private baseUrl = environment.fitnessApiUrl;

  constructor(private http: Http) {
  }

  getWorkout(id: string): Observable<Workout> {
    console.log('getWorkout(' + id + ') called');

    return this.http.get(this.baseUrl + '/workouts/' + id)
      .map((res) => res.json() as Workout)
      .do((data) => console.log(data))
      .catch(this.handleError);
  }

  handleError(error: Response) {
    console.error(error);
    return Observable.throw(error.json() || 'Server error');
  }
}
