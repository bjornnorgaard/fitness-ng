import { Component } from '@angular/core';
import { MdDialogRef } from '@angular/material';
import {Exercise} from "../../shared/class/exercises";

@Component({
    selector: 'app-exercise',
    templateUrl: './exercise.component.html',
    styleUrls: ['./exercise.component.css']
})
export class ExerciseComponent {

    public exerciseName: string;
    public repsAmount: string;
    public exerciseDescription: string;
    public setsAmount: string;

    constructor(public dialogRef: MdDialogRef<ExerciseComponent>) { }

    closeDialog() {
        this.dialogRef.close(undefined);
    }

    saveDialog() {
        const exercise = new Exercise(this.generateUuidv4(),
          this.exerciseName,
          this.exerciseDescription,
          this.setsAmount,
          this.repsAmount);

        this.dialogRef.close(exercise);
    }

    generateUuidv4(): string {
      return ('' + [1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, ch => {
          let c = Number(ch);
          return (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16);
        }
      );
    }
}
