import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { Dispositivo } from 'src/app/interfaces/productos';
import { DispositivoService } from 'src/app/services/dispositivo.service';

@Component({
  selector: 'app-dispositivos',
  templateUrl: './dispositivos.component.html',
  styleUrls: ['./dispositivos.component.css']
})
export class DispositivosComponent implements OnInit {

  loading = true;
  listDispositivos: Dispositivo[] = [];
  
  displayedColumns = ['id', 'nombre', 'marca', 'bateria', 'potencia', 'coste'];
  dataSource!: MatTableDataSource<any>;
  
  
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  
  constructor(private _dispositivoService: DispositivoService,
    private _snackBar: MatSnackBar,
    private _router: Router) { }
  
  ngOnInit(): void {
    this._dispositivoService.getDispositivo()
      .pipe((first()))
      .subscribe(data => {
        this.listDispositivos = data,
          this.dataSource = new MatTableDataSource(this.listDispositivos);
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
}
