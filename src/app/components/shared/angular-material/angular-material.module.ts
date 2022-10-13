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

//Importar el Sort - Ordenamiento
import { MatSortModule } from '@angular/material/sort';

//Importar el calendario
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

//Importar el Select
import { MatSelectModule } from '@angular/material/select';

//Importar Radio Button | API reference for Angular Material radio
import { MatRadioModule } from '@angular/material/radio';


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
    MatPaginatorModule,
    MatSortModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    MatRadioModule
  ],
  exports: [
    MatSliderModule,
    MatToolbarModule,
    MatIconModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatPaginatorModule,
    MatSortModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    MatRadioModule
  ]
})

export class AngularMaterialModule { }
