import { Injectable } from '@angular/core';
import { Empleado } from '../models/empleado';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {
  listEmpleado: Empleado[] = [
    {
      nombreCompleto: 'Lucas Fernández',
      telefono: '678412563',
      email: 'LucasFndez@gmail.com',
      fechaIngreso: new Date(),
      estadoCivil: 'Casado',
      genero: 'Masculino'
    },
    {
      nombreCompleto: 'Rodrigo Aliaga',
      telefono: '673312563',
      email: 'Rodri@gmail.com',
      fechaIngreso: new Date('2020-04-04'),
      estadoCivil: 'Soltero',
      genero: 'Masculino'
    },
    {
      nombreCompleto: 'Lucía Pacho',
      telefono: '778412563',
      email: 'LucíadelaO@gmail.com',
      fechaIngreso: new Date('2019-07-25'),
      estadoCivil: 'Viuda',
      genero: 'Femenino'
    },
    {
      nombreCompleto: 'María González',
      telefono: '714258963',
      email: 'mariaGonzalezCuevas@gmail.com',
      fechaIngreso: new Date('2018-03-22'),
      estadoCivil: 'Soltera',
      genero: 'Bigénero'
    },
    {
      nombreCompleto: 'Javier Ferreiro',
      telefono: '693582471',
      email: 'JavierrrF@gmail.com',
      fechaIngreso: new Date('2021-09-26'),
      estadoCivil: 'Divorciado',
      genero: 'Otro'
    },
    {
      nombreCompleto: 'María Belén Arzúa',
      telefono: '655412563',
      email: 'MBelen@gmail.com',
      fechaIngreso: new Date('2020-01-31'),
      estadoCivil: 'Soltero',
      genero: 'Femenino'
    },
    {
      nombreCompleto: 'Estefi Daniella',
      telefono: '625237894',
      email: 'EsfefiDaniella@gmail.com',
      fechaIngreso: new Date('2017-06-01'),
      estadoCivil: 'Casado',
      genero: 'Otros'
    },
    {
      nombreCompleto: 'Manuel Cerrato',
      telefono: '677892563',
      email: 'MCerrato@gmail.com',
      fechaIngreso: new Date('2019-02-07'),
      estadoCivil: 'Casado',
      genero: 'Masculino'
    },
    {
      nombreCompleto: 'Aurora Agüero',
      telefono: '677117863',
      email: 'AuroraBoreal@gmail.com',
      fechaIngreso: new Date('2020-02-07'),
      estadoCivil: 'Soltera',
      genero: 'Prefiero no decir'
    },
    {
      nombreCompleto: 'Manuela Cerrato',
      telefono: '676892563',
      email: 'ManuelaCerrato@gmail.com',
      fechaIngreso: new Date('2019-02-06'),
      estadoCivil: 'Viuda',
      genero: 'Bigénero'
    }

  ]

  constructor() { }

  getEmpleados() {
    return this.listEmpleado.slice();
  }
}
