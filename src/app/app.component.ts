import { Component, OnInit } from '@angular/core';
import { Workout } from './shared/class/workout';
import { FitnessService } from './shared/service/fitness.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  workout: Workout;

  constructor(private fitnessService: FitnessService) {
  }

  ngOnInit(): void {
    this.fitnessService.getWorkout('59c4dc2f44830b3aa07341d5').subscribe(data => {
      this.workout = data;
    });
  }

}
