import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {
  MdButtonModule,
  MdCardModule,
  MdDialogModule,
  MdListModule,
  MdRadioModule, MdSelectModule, MdSnackBarModule,
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
    MdSnackBarModule
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
    MdSnackBarModule
  ],
  declarations: []
})
export class NgMaterialModule {
}
