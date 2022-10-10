import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Importar Angular Material
import { MatSliderModule } from '@angular/material/slider';




@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatSliderModule
  ],
  exports: [
    MatSliderModule
  ]
})
export class AngularMaterialModule { }
