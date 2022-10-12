import { Component, OnInit } from '@angular/core';
import { MatCalendarCellClassFunction } from '@angular/material/datepicker';

@Component({
  selector: 'add-edit-empleado',
  templateUrl: './add-edit-empleado.component.html',
  styleUrls: ['./add-edit-empleado.component.css']
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
  estadosCiviles: any[] = ['Soltero/a', 'Casado/a', 'Viudo/a', 'Divorciado/a']
  constructor() { }

  ngOnInit(): void {
  }

}
