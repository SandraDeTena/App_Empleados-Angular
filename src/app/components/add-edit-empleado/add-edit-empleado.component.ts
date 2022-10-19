import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatCalendarCellClassFunction } from '@angular/material/datepicker';
import { MAT_RADIO_DEFAULT_OPTIONS } from '@angular/material/radio';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Empleado } from 'src/app/models/empleado';
import { EmpleadoService } from 'src/app/services/empleado.service';

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


  constructor(
    private fb: FormBuilder,
    private empleadoService: EmpleadoService,
    private snackBar: MatSnackBar,
    private route: Router
  ) {

    this.form = this.fb.group({
      nombreCompleto: ['', Validators.required],
      email: [''],
      fechaIngreso: [''],
      telefono: [''],
      estadoCivil: [''],
      genero: ['']
    })
  }

  ngOnInit(): void {
  }

  guardarEmpleado() {
    console.log(this.form);

    // const empleado: Empleado = {
    //   nombreCompleto: this.form.get('nombreCompleto')?.value,
    //   email: this.form.get('email')?.value,
    //   fechaIngreso: this.form.get('fechaIngreso')?.value,
    //   telefono: this.form.get('telefono')?.value,
    //   estadoCivil: this.form.get('estadoCivil')?.value,
    //   genero: this.form.get('genero')?.value,
    // };
    // this.empleadoService.agregarEmpleado(empleado);
    // console.log(empleado);
    // this.snackBar.open('¡El empleado fue agregado a la tabla con exito 🗑️ !', '', {
    //   duration: 3000
    // });
    // this.route.navigate('/');

  }

}
