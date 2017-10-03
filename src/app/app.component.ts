import { Component, OnInit } from '@angular/core';
import { Workout } from './shared/class/workout';
import { FitnessService } from './shared/service/fitness.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  workouts: Workout[];

  constructor(private fitnessService: FitnessService) {
  }

  ngOnInit(): void {
    this.fitnessService.getAllWorkouts().subscribe(data => {
      this.workouts = data;
      console.log(data);
    });
  }

  logWorkout(id: Number) {
    console.log('Logging activity for workout with id: ' + id);
  }
}
