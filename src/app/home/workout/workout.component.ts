import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-workout',
  templateUrl: './workout.component.html',
  styleUrls: ['./workout.component.css']
})
export class WorkoutComponent {

  workoutFormGroup: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router) {
    this.workoutFormGroup = formBuilder.group({
      'title': [null, Validators.compose([
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(15)])]
    });
  }

  postWorkout() {
    console.log(this.workoutFormGroup.controls['title'].value as string);
  }

  cancel() {
    this.router.navigate(['/']);
  }

}
