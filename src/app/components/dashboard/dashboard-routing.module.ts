import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { InicioComponent } from './inicio/inicio.component';
import { ReportesComponent } from './reportes/reportes.component';
import { ClientesComponent } from './usuarios/clientes/clientes.component';
import { CrearClienteComponent } from './usuarios/crear-cliente/crear-cliente.component';
import { EmpleadosComponent } from './usuarios/empleados/empleados.component';

const routes: Routes = [
  { path:'', component: DashboardComponent, children: [
    { path:'', component: InicioComponent },
    { path:'clientes', component: ClientesComponent },
    { path:'empleados', component: EmpleadosComponent },
    { path:'reportes', component: ReportesComponent },
    { path:'crear-cliente', component: CrearClienteComponent }
  ] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
