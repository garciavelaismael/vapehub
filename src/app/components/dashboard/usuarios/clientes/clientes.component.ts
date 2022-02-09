import { Component, OnInit, ViewChild, ChangeDetectorRef } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { Cliente } from 'src/app/interfaces/usuarios';
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

  listClientes: Cliente[] = [];

  displayedColumns = ['id', 'nombre', 'calle', 'numero', 'telefono', 'email', 'socio', 'acciones'];
  dataSource!: MatTableDataSource<any>;


  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private _clienteService: ClienteService, private _snackBar: MatSnackBar, private _changeDetectorRefs: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.cargarClientes();
  }

  cargarClientes() {
    this._clienteService.getCliente().subscribe(data => {
      this.listClientes = data,      
        this.dataSource = new MatTableDataSource(this.listClientes);
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

  eliminarCliente(id: any) {
    this._clienteService.eliminarCliente(id).subscribe((data: any[]) => {
      console.log(this.dataSource.data);
      this.dataSource.data = data;
        })
    this._snackBar.open('Cliente eliminado correctamente', '', {
      duration: 1500,
      horizontalPosition: 'center',
      verticalPosition: 'bottom'
    })
 }
}
