import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatCalendarCellClassFunction } from '@angular/material/datepicker';
import { MAT_RADIO_DEFAULT_OPTIONS } from '@angular/material/radio';

@Component({
  selector: 'add-edit-empleado',
  templateUrl: './add-edit-empleado.component.html',
  styleUrls: ['./add-edit-empleado.component.css'],
  providers: [{
    provide: MAT_RADIO_DEFAULT_OPTIONS,
    useValue: { color: 'primary' },
  }]
})
export class AddEditEmpleadoComponent implements OnInit {
  dateClass: MatCalendarCellClassFunction<Date> = (cellDate: { getDate: () => any; }, view: string) => {
    // Only highligh dates inside the month view.
    if (view === 'month') {
      const date = cellDate.getDate();

      // Highlight the 1st and 20th day of each month.
      return date === 1 || date === 20 ? 'example-custom-date-class' : '';
    }

    return '';
  };

  //Estados civiles
  estadosCiviles: any[] = ['Soltero/a', 'Casado/a', 'Viudo/a', 'Divorciado/a'];

  //Formulario
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      nombreCompleto: [''],
      email: [''],
      fechaIngreso: [''],
      telefono: [''],
      estadoCivil: [''],
      genero: ['']
    })
  }

  ngOnInit(): void {
  }

}
