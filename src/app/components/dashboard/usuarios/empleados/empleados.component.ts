import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Empleado } from 'src/app/interfaces/usuarios';
import { EmpleadoService } from 'src/app/services/empleado.service';

@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.component.html',
  styleUrls: ['./empleados.component.css']
})
export class EmpleadosComponent implements OnInit {

  listEmpleados: Empleado[] = [];

  displayedColumns = ['id', 'nombre', 'calle', 'numero', 'telefono', 'email', 'socio'];
  dataSource!: MatTableDataSource<any>;


  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private _empleadoService: EmpleadoService, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.cargarClientes();
  }

  cargarClientes() {
    this._empleadoService.getEmpleado().subscribe(data => {
      this.listEmpleados = data,
        this.dataSource = new MatTableDataSource(this.listEmpleados);
    })
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  // eliminarCliente(index: number) {
  //   console.log(index);
  //
  //   this._clienteService.eliminarCliente(index);
  //   this.cargarClientes();
  //   this._snackBar.open('Usuario eliminado correctamente', '', {
  //     duration: 1500,
  //     horizontalPosition: 'center',
  //     verticalPosition: 'bottom'
  //   })
  // }
}
