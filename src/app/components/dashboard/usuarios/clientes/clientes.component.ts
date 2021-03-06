import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { first } from 'rxjs';
import { Cliente } from 'src/app/interfaces/usuarios';
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

  loading = true;
  listClientes: Cliente[] = [];

  displayedColumns = ['id', 'nombre', 'calle', 'numero', 'telefono', 'email', 'socio', 'acciones'];
  dataSource!: MatTableDataSource<any>;

  constructor(private _clienteService: ClienteService,
    private _snackBar: MatSnackBar,
    private _router: Router) { }

  ngOnInit(): void {
    this._clienteService.getCliente()
      .pipe((first()))
      .subscribe(data => {
        this.listClientes = data,
          this.dataSource = new MatTableDataSource(this.listClientes);

        this.loading = false;
      })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  deleteCliente(id: string) {
    this._clienteService.deleteCliente(id)
      .pipe((first()))
      .subscribe(data => {
        console.log(data);
        this.ngOnInit();
        this._snackBar.open('Cliente eliminado correctamente', '', {
          duration: 1500,
          horizontalPosition: 'center',
          verticalPosition: 'bottom'
        })
      },
        error => console.log(error));
  }

  addCliente() {
    this._router.navigate(['/dashboard/crear-cliente']);
  }

  editCliente(id: number) {
    this._router.navigate(['/dashboard/crear-cliente', id]);
    console.log(id);
  }
}
