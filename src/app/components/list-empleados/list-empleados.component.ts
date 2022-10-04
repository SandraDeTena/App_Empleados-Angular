import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

export interface Empleados {
  position: number;
  name: string;
  age: number;
  dateIncorporation: string;
  generation: string;
}

const ELEMENT_DATA: Empleados[] = [
  { position: 1, name: 'Aida Soto Pacho', age: 29, dateIncorporation: '15/09/2020', generation: 'F' },
  { position: 2, name: 'Miguel Sánchez Silva', age: 40, dateIncorporation: '22/07/2020', generation: 'M' },
  { position: 3, name: 'José Luís Mañueco Gómez', age: 62, dateIncorporation: '15/09/2020', generation: 'M' },
  { position: 4, name: 'Angels Barceló', age: 32, dateIncorporation: '15/09/2020', generation: 'F' },
  { position: 5, name: 'Iñigo Niño Fernández', age: 18, dateIncorporation: '15/09/2020', generation: 'M' },
  { position: 6, name: 'Ana Carpio Plaza', age: 20, dateIncorporation: '15/09/2020', generation: 'F' },
  { position: 7, name: 'Aura Ferreiro', age: 40, dateIncorporation: '15/09/2020', generation: 'F' },
  { position: 8, name: 'Jaime Ostos Galdós', age: 59, dateIncorporation: '15/09/2020', generation: 'M' },
  { position: 9, name: 'Juan Manuel Rodriguez Serradilla', age: 18, dateIncorporation: '15/09/2020', generation: 'M' },
  { position: 10, name: 'Matilda Falcón', age: 20, dateIncorporation: '15/09/2020', generation: 'F' },
];

@Component({
  selector: 'list-empleados',
  templateUrl: './list-empleados.component.html',
  styleUrls: ['./list-empleados.component.css']
})
export class ListEmpleadosComponent implements OnInit {

  displayedColumns: string[] = ['position', 'name', 'age', 'dateIncorporation', 'generation'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  clickedRows = new Set<Empleados>();

  // @ViewChild(MatPaginator,{static: true}) paginator: MatPaginator;
  // @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor() {
    // this.paginator = new MatPaginator();
  }

  ngOnInit(): void {
    // this.dataSource.paginator = this.paginator;
    // this.dataSource.sort = this.sort;
  }

  // applyFilter(event: Event) {
  //   const filterValue = (event.target as HTMLInputElement).value;
  //   this.dataSource.filter = filterValue.trim().toLowerCase();
  // }
}
