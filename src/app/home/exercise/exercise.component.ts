import { Component } from '@angular/core';
import {MdDialogRef} from '@angular/material';

@Component({
  selector: 'app-exercise',
  templateUrl: './exercise.component.html',
  styleUrls: ['./exercise.component.css']
})
export class ExerciseComponent {

  public exerciseName: string;
  public repsAmount: string;

  constructor(public dialogRef: MdDialogRef<ExerciseComponent>) { }

  closeDialog() {
    this.dialogRef.close(undefined);
  }

  saveDialog() {

  }
}
