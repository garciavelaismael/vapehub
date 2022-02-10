import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Empleado } from 'src/app/interfaces/usuarios';
import { EmpleadoService } from 'src/app/services/empleado.service';

@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.component.html',
  styleUrls: ['./empleados.component.css']
})
export class EmpleadosComponent implements OnInit {

  loading = true;
  listEmpleados: Empleado[] = [];

  displayedColumns = ['id', 'nombre', 'calle', 'numero', 'telefono', 'email', 'puesto', 'acciones'];
  dataSource!: MatTableDataSource<any>;


  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private _empleadoService: EmpleadoService,
    private _snackBar: MatSnackBar,
    private _changeDetectorRefs: ChangeDetectorRef,
    private _router: Router) { }

  ngOnInit(): void {
    this._empleadoService.getEmpleado().subscribe(data => {
      this.listEmpleados = data,
        this.dataSource = new MatTableDataSource(this.listEmpleados);
      this.loading = false;
    })
  }

  ngAfterViewInit() {
    //this.dataSource.paginator = this.paginator;
    //this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  deleteEmpleado(id: number) {
    this._empleadoService.deleteEmpleado(id). subscribe(data => {
        console.log(data);
        this.ngOnInit();
      },
        error => console.log(error));
  }

  addEmpleado() {
    this._router.navigate(['/dashboard/crear-empleado']);
  }

  editEmpleado(id: number) {
    this._router.navigate(['/dashboard/crear-empleado', id]);
    console.log(id);
  }
}
