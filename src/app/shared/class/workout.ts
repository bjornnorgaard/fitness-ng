import { Exercise } from './exercises';

export interface Workout {
  id: Number;
  title: String;
  exercises: Exercise[];
}
