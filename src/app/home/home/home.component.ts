import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Workout } from '../../shared/class/workout';
import { FitnessService } from '../../shared/service/fitness.service';
import { MdSnackBar } from '@angular/material';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  workouts: Workout[];

  constructor(private fitnessService: FitnessService, private router: Router, private snackbar: MdSnackBar) {
  }

  ngOnInit(): void {
    this.fitnessService.getAllWorkouts().subscribe(data => {
      this.workouts = data;
    });
  }

  logWorkout(id: number) {
    this.snackbar.open('Activity Logged', null, {duration: 1500});
    this.fitnessService.createLog(id);
  }

  createExercise(id: Number) {
    this.router.navigate(['/exercise', id]);
  }

}
