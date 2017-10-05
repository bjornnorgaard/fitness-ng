import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Workout } from '../../shared/class/workout';
import { ExerciseComponent } from '../exercise/exercise.component';
import { FitnessService } from '../../shared/service/fitness.service';
import { MdSnackBar, MdDialog } from '@angular/material';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  workouts: Workout[];

  constructor(private fitnessService: FitnessService, private router: Router, private snackbar: MdSnackBar,
            private dialog: MdDialog) {
  }

  ngOnInit(): void {
    this.fitnessService.getAllWorkouts().subscribe(data => {
      this.workouts = data;
    });
  }

  logWorkout(id: Number) {
    this.snackbar.open('Activity Logged', null, {duration: 1500});
  }

  createExercise(id: Number) {

      const dialogRef = this.dialog.open(ExerciseComponent);

      dialogRef.afterClosed().subscribe(result => {
          console.log("stuff");
      });

  }

}
