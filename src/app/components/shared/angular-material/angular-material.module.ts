import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Importar Angular Material
import { MatSliderModule } from '@angular/material/slider';

//Importar Toolbar de Angular Material
import { MatToolbarModule } from '@angular/material/toolbar';

//Importar Iconos de Angular Material
import { MatIconModule } from '@angular/material/icon';

//Importal Table de Angular Material
import { MatTableModule } from '@angular/material/table';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatSliderModule,
    MatToolbarModule,
    MatIconModule,
    MatTableModule
  ],
  exports: [
    MatSliderModule,
    MatToolbarModule,
    MatIconModule,
    MatTableModule,
  ]
})

export class AngularMaterialModule { }
