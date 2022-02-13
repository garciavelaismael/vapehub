import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { Liquido } from 'src/app/interfaces/productos';
import { LiquidoService } from 'src/app/services/liquido.service';

@Component({
  selector: 'app-liquidos',
  templateUrl: './liquidos.component.html',
  styleUrls: ['./liquidos.component.css']
})
export class LiquidosComponent implements OnInit {

loading = true;
listLiquidos: Liquido[] = [];

displayedColumns = ['id', 'nombre', 'marca', 'sabor', 'nicotina', 'coste'];
dataSource!: MatTableDataSource<any>;


@ViewChild(MatPaginator) paginator!: MatPaginator;
@ViewChild(MatSort) sort!: MatSort;

constructor(private _liquidoService: LiquidoService,
  private _snackBar: MatSnackBar,
  private _router: Router) { }

ngOnInit(): void {
  this._liquidoService.getLiquido()
    .pipe((first()))
    .subscribe(data => {
      this.listLiquidos = data,
        this.dataSource = new MatTableDataSource(this.listLiquidos);
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
