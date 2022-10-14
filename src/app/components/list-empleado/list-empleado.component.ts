import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { EmpleadoService } from 'src/app/services/empleado.service';
import { Empleado } from 'src/app/models/empleado';
import { MatDialog } from '@angular/material/dialog';
import { MensajeConfirmacionComponent } from '../shared/mensaje-confirmacion/mensaje-confirmacion.component';
import { MatSnackBar } from '@angular/material/snack-bar';

// export interface Empleado {
//   position: number;
//   nombreCompleto: string;
//   telefono: string;
//   email: string;
//   fechaIngreso: Date;
//   estadoCivil: string;
//   genero: string;

// }

// const ELEMENT_DATA: Empleado[] = [
//   {
//     position: 1,
//     nombreCompleto: 'Lucas Fernández',
//     telefono: '678412563',
//     email: 'LucasFndez@gmail.com',
//     fechaIngreso: new Date(),
//     estadoCivil: 'Casado',
//     genero: 'Masculino'
//   },
//   {
//     position: 2,
//     nombreCompleto: 'Rodrigo Aliaga',
//     telefono: '673312563',
//     email: 'Rodri@gmail.com',
//     fechaIngreso: new Date('2020-04-04'),
//     estadoCivil: 'Soltero',
//     genero: 'Masculino'
//   },
//   {
//     position: 3,
//     nombreCompleto: 'Lucía Pacho',
//     telefono: '778412563',
//     email: 'LucíadelaO@gmail.com',
//     fechaIngreso: new Date('2019-07-25'),
//     estadoCivil: 'Viuda',
//     genero: 'Femenino'
//   },
//   {
//     position: 4,
//     nombreCompleto: 'María González',
//     telefono: '714258963',
//     email: 'mariaGonzalezCuevas@gmail.com',
//     fechaIngreso: new Date('2018-03-22'),
//     estadoCivil: 'Soltera',
//     genero: 'Bigénero'
//   },
//   {
//     position: 5,
//     nombreCompleto: 'Javier Ferreiro',
//     telefono: '693582471',
//     email: 'JavierrrF@gmail.com',
//     fechaIngreso: new Date('2021-09-26'),
//     estadoCivil: 'Divorciado',
//     genero: 'Otro'
//   },
//   {
//     position: 6,
//     nombreCompleto: 'María Belén Arzúa',
//     telefono: '655412563',
//     email: 'MBelen@gmail.com',
//     fechaIngreso: new Date('2020-01-31'),
//     estadoCivil: 'Soltero',
//     genero: 'Femenino'
//   },
//   {
//     position: 7,
//     nombreCompleto: 'Estefi Daniella',
//     telefono: '625237894',
//     email: 'EsfefiDaniella@gmail.com',
//     fechaIngreso: new Date('2017-06-01'),
//     estadoCivil: 'Casado',
//     genero: 'Otros'
//   },
//   {
//     position: 8,
//     nombreCompleto: 'Manuel Cerrato',
//     telefono: '677892563',
//     email: 'MCerrato@gmail.com',
//     fechaIngreso: new Date('2019-02-07'),
//     estadoCivil: 'Casado',
//     genero: 'Masculino'
//   },
//   {
//     position: 9,
//     nombreCompleto: 'Aurora Agüero',
//     telefono: '677117863',
//     email: 'AuroraBoreal@gmail.com',
//     fechaIngreso: new Date('2020-02-07'),
//     estadoCivil: 'Soltera',
//     genero: 'Prefiero no decir'
//   },
//   {
//     position: 10,
//     nombreCompleto: 'Manuela Cerrato',
//     telefono: '676892563',
//     email: 'ManuelaCerrato@gmail.com',
//     fechaIngreso: new Date('2019-02-06'),
//     estadoCivil: 'Viuda',
//     genero: 'Bigénero'
//   },
// ];

@Component({
  selector: 'list-empleado',
  templateUrl: './list-empleado.component.html',
  styleUrls: ['./list-empleado.component.css']
})
export class ListEmpleadoComponent implements OnInit {
  displayedColumns: string[] = [
    'position',
    'nombreCompleto',
    'email',
    'fechaIngreso',
    'telefono',
    'estadoCivil',
    'genero',
    'acciones'
  ];

  dataSource = new MatTableDataSource<Empleado>();
  listEmpleado: Empleado[] = [];

  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort!: MatSort;

  constructor(
    private empleadoService: EmpleadoService,
    public dialog: MatDialog,
    public snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {

    this.cargarEmpleados;
  }

  //Para el filtro
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  // Cargar lista de empleados
  cargarEmpleados() {
    this.listEmpleado = this.empleadoService.getEmpleados();
    this.dataSource = new MatTableDataSource<Empleado>(this.listEmpleado);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    console.log(this.listEmpleado);

  }

  eliminarEmpleado(index: number) {
    const dialogRef = this.dialog.open(MensajeConfirmacionComponent, {
      width: '650px',
      data: { mensaje: '¿Está seguro qué quieres eliminar el empleado de forma defimitiva?' },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result === 'aceptar') {
        this.empleadoService.eliminarEmpleado(index);
        // Para generar de nuevo
        this.cargarEmpleados();
        this.snackBar.open('¡El empleado fue eliminado con exito 🗑️ !', '', {
          duration: 3000
        });
        console.log(index);
      }

    });

  }
}
