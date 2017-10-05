import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  MdButtonModule,
  MdCardModule,
  MdDialogModule,
  MdInputModule,
  MdListModule,
  MdProgressSpinnerModule,
  MdRadioModule,
  MdSelectModule,
  MdSnackBarModule, MdTableModule,
  MdToolbarModule
} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MdButtonModule,
    MdToolbarModule,
    MdCardModule,
    MdRadioModule,
    MdListModule,
    MdDialogModule,
    MdSelectModule,
    MdSnackBarModule,
    MdProgressSpinnerModule,
    MdInputModule,
    FormsModule,
    ReactiveFormsModule,
    MdTableModule,
  ],
  exports: [
    CommonModule,
    BrowserAnimationsModule,
    MdButtonModule,
    MdToolbarModule,
    MdCardModule,
    MdRadioModule,
    MdListModule,
    MdDialogModule,
    MdSelectModule,
    MdSnackBarModule,
    MdProgressSpinnerModule,
    MdInputModule,
    FormsModule,
    ReactiveFormsModule,
    MdTableModule,
  ],
  declarations: []
})
export class NgMaterialModule {
}
