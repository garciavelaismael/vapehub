import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { SharedModule } from '../shared/shared.module';
import { DashboardComponent } from './dashboard.component';
import { InicioComponent } from './inicio/inicio.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ReportesComponent } from './reportes/reportes.component';
import { ClientesComponent } from './usuarios/clientes/clientes.component';
import { EmpleadosComponent } from './usuarios/empleados/empleados.component';
import { CrearClienteComponent } from './usuarios/crear-cliente/crear-cliente.component';
import { CrearEmpleadoComponent } from './usuarios/crear-empleado/crear-empleado.component';
import { LiquidosComponent } from './productos/liquidos/liquidos.component';
import { DispositivosComponent } from './productos/dispositivos/dispositivos.component';
import { CompraComponent } from './compra/compra.component';

@NgModule({
  declarations: [
    DashboardComponent,
    InicioComponent,
    NavbarComponent,
    ReportesComponent,
    ClientesComponent,
    EmpleadosComponent,
    CrearClienteComponent,
    CrearEmpleadoComponent,
    LiquidosComponent,
    DispositivosComponent,
    CompraComponent,
],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule
  ]
})
export class DashboardModule { }
