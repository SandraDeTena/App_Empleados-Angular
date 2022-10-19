import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEditEmpleadoComponent } from './components/add-edit-empleado/add-edit-empleado.component';
import { ListEmpleadoComponent } from './components/list-empleado/list-empleado.component';

const routes: Routes = [
  // Cuándo el user ponga otra dirección y no tengamos esa ruta va a Lista de Empleados
  { path: '**', component: ListEmpleadoComponent },

  // Cuándo no ponga ruta y sea sólo el inicio de la ruta, te lleva a Lista de Empleados
  { path: '', component: ListEmpleadoComponent },

  //Cuádo sea ADD que es añadir, te rediriga a Añadir Empleado
  { path: 'add', component: AddEditEmpleadoComponent },

  //Cuádo sea EDIT que es EDITAR,con el ID de forma dinámica, te rediriga a Editar Empleado
  { path: 'edit/:id', component: AddEditEmpleadoComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
