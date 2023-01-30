import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatInputModule} from '@angular/material/input';

const Materials = [
  MatInputModule
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    Materials
  ],
  exports: [
    Materials
  ]
})
export class AppMaterialsModule { }
