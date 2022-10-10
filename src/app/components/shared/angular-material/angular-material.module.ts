import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Importar Angular Material
import { MatSliderModule } from '@angular/material/slider';

//Importar Toolbar de Angular Material
import { MatToolbarModule } from '@angular/material/toolbar';

//Importar Iconos de Angular Material
import { MatIconModule } from '@angular/material/icon';




@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatSliderModule,
    MatToolbarModule,
    MatIconModule
  ],
  exports: [
    MatSliderModule,
    MatToolbarModule,
    MatIconModule
  ]
})
export class AngularMaterialModule { }
