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

//Importar FormField, para el input
import { MatFormFieldModule } from '@angular/material/form-field';

//Importar el input
import { MatInputModule } from '@angular/material/input';

//Importar páginador
import { MatPaginatorModule } from '@angular/material/paginator';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatSliderModule,
    MatToolbarModule,
    MatIconModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatPaginatorModule
  ],
  exports: [
    MatSliderModule,
    MatToolbarModule,
    MatIconModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatPaginatorModule
  ]
})

export class AngularMaterialModule { }
