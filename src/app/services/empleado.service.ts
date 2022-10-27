import { Injectable } from '@angular/core';
import { Empleado } from '../models/empleado';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {
  listEmpleado: Empleado[] = [
    {
      position: 1,
      nombreCompleto: 'Lucas Fernández',
      telefono: '678412563',
      email: 'LucasFndez@gmail.com',
      fechaIngreso: new Date(),
      estadoCivil: 'Casado',
      genero: 'Masculino'
    },
    {
      position: 2,
      nombreCompleto: 'Rodrigo Aliaga',
      telefono: '673312563',
      email: 'Rodri@gmail.com',
      fechaIngreso: new Date('2020-04-04'),
      estadoCivil: 'Soltero',
      genero: 'Masculino'
    },
    {
      position: 3,
      nombreCompleto: 'Lucía Pacho',
      telefono: '778412563',
      email: 'LucíadelaO@gmail.com',
      fechaIngreso: new Date('2019-07-25'),
      estadoCivil: 'Viuda',
      genero: 'Femenino'
    },
    {
      position: 4,
      nombreCompleto: 'María González',
      telefono: '714258963',
      email: 'mariaGonzalezCuevas@gmail.com',
      fechaIngreso: new Date('2018-03-22'),
      estadoCivil: 'Soltera',
      genero: 'Bigénero'
    },
    {
      position: 4,
      nombreCompleto: 'Javier Ferreiro',
      telefono: '693582471',
      email: 'JavierrrF@gmail.com',
      fechaIngreso: new Date('2021-09-26'),
      estadoCivil: 'Divorciado',
      genero: 'Otro'
    },
    {
      position: 5,
      nombreCompleto: 'María Belén Arzúa',
      telefono: '655412563',
      email: 'MBelen@gmail.com',
      fechaIngreso: new Date('2020-01-31'),
      estadoCivil: 'Soltero',
      genero: 'Femenino'
    },
    {
      position: 6,
      nombreCompleto: 'Estefi Daniella',
      telefono: '625237894',
      email: 'EsfefiDaniella@gmail.com',
      fechaIngreso: new Date('2017-06-01'),
      estadoCivil: 'Casado',
      genero: 'Otros'
    },
    {
      position: 7,
      nombreCompleto: 'Manuel Cerrato',
      telefono: '677892563',
      email: 'MCerrato@gmail.com',
      fechaIngreso: new Date('2019-02-07'),
      estadoCivil: 'Casado',
      genero: 'Masculino'
    },
    {
      position: 8,
      nombreCompleto: 'Aurora Agüero',
      telefono: '677117863',
      email: 'AuroraBoreal@gmail.com',
      fechaIngreso: new Date('2020-02-07'),
      estadoCivil: 'Soltera',
      genero: 'Prefiero no decir'
    },
    {
      position: 9,
      nombreCompleto: 'Manuela Cerrato',
      telefono: '676892563',
      email: 'ManuelaCerrato@gmail.com',
      fechaIngreso: new Date('2019-02-06'),
      estadoCivil: 'Viuda',
      genero: 'Bigénero'
    },
    {
      position: 10,
      nombreCompleto: 'Andrés Del Pozo',
      telefono: '689892563',
      email: 'AndrésMoral@gmail.com',
      fechaIngreso: new Date('2018-11-06'),
      estadoCivil: 'Viudo',
      genero: 'Bigénero'
    }

  ]

  constructor() { }

  getEmpleados() {
    return this.listEmpleado.slice();
  }

  eliminarEmpleado(index: number) {
    this.listEmpleado.splice(index, 1);
  }

  agregarEmpleado(empleado: Empleado) {
    this.listEmpleado.unshift(empleado);
  }

  getEmpleado(index: number) {
    return this.listEmpleado[index];
  }

  editEmpleado(empleado: Empleado, idEmpleado: number) {
    this.listEmpleado[idEmpleado].nombreCompleto = empleado.nombreCompleto;
    this.listEmpleado[idEmpleado].email = empleado.email;
    this.listEmpleado[idEmpleado].fechaIngreso = empleado.fechaIngreso;
    this.listEmpleado[idEmpleado].telefono = empleado.telefono;
    this.listEmpleado[idEmpleado].estadoCivil = empleado.estadoCivil;
    this.listEmpleado[idEmpleado].genero = empleado.genero;
  }
}
