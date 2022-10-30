import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEditEmpleadoComponent } from './components/add-edit-empleado/add-edit-empleado.component';
import { ListEmpleadoComponent } from './components/list-empleado/list-empleado.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

const routes: Routes = [

  // { path: 'lista-empleados', component: ListEmpleadoComponent },
  // { path: '', redirectTo: 'lista-empleados', pathMatch: 'full' },

  // Cuándo no ponga ruta y sea sólo el inicio de la ruta, te lleva a Lista de Empleados
  { path: '', component: ListEmpleadoComponent },

  //Cuádo sea ADD que es añadir, te rediriga a Añadir Empleado -Formulario-
  { path: 'add', component: AddEditEmpleadoComponent },

  //Cuádo sea EDIT que es EDITAR,con el ID de forma dinámica, te rediriga a Editar Empleado
  { path: 'edit/:id', component: AddEditEmpleadoComponent },

  //Cuádo pongas una ruta que no existe
  { path: 'edit/:id', component: AddEditEmpleadoComponent },

  // Cuándo el user ponga otra dirección y no tengamos esa ruta va a Lista de Empleados
  {
    path: '**',
    component: PageNotFoundComponent,
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
