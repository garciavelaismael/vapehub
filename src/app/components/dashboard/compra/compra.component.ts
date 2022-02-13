import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { tCompra } from 'src/app/interfaces/compra';
import { Compra } from 'src/app/interfaces/usuarios';
import { CompraService } from 'src/app/services/compra.service';
import { DispositivoService } from 'src/app/services/dispositivo.service';
import { LiquidoService } from 'src/app/services/liquido.service';

@Component({
  selector: 'app-compra',
  templateUrl: './compra.component.html',
  styleUrls: ['./compra.component.css']
})
export class CompraComponent implements OnInit {
  compraForm!: FormGroup;
  id!: string;
  idCliente: string = "";
  listCompra: Compra[] = [];
  coste!: number;

  constructor(
    private _fb: FormBuilder,
    private _compraService: CompraService,
    private _liquidoService: LiquidoService,
    private _dispositivoService: DispositivoService,
    private _snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.compraForm = this._fb.group({
      id: ['', Validators.required],
      dni: ['', Validators.required],
      idp: ['', Validators.required],
    })
  }

  onSubmit() {
    this.addCompra();
  }

  addCompra() {
    this.id = this.compraForm.get('idp')?.value

    if (this.id >= '100') {
      this._liquidoService.getLiquidoId(this.id)
        .subscribe(data => {
          console.log(data);
          this.coste = data._coste

          const COMPRA: tCompra = {
            id: this.compraForm.get('id')?.value,
            idCliente: this.compraForm.get('dni')?.value,
            idProducto: this.compraForm.get('idp')?.value,
            coste: this.coste
          }
          this._compraService.addCompra(COMPRA)
            .subscribe()
          this.compraForm.reset()
        })
    } if (this.id < '100') {
      this._dispositivoService.getDispositivoId(this.id)
        .subscribe(data => {
          console.log(data);
          this.coste = data._coste

          const COMPRA: tCompra = {
            id: this.compraForm.get('id')?.value,
            idCliente: this.compraForm.get('dni')?.value,
            idProducto: this.compraForm.get('idp')?.value,
            coste: this.coste
          }
          this._compraService.addCompra(COMPRA)
            .subscribe()
          this.compraForm.reset()
        })
    }
  }
}
