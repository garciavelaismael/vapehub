import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { Cliente, tCliente } from 'src/app/interfaces/usuarios';
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-crear-cliente',
  templateUrl: './crear-cliente.component.html',
  styleUrls: ['./crear-cliente.component.css']
})
export class CrearClienteComponent implements OnInit {
  clienteForm!: FormGroup;
  id!: string | null;
  isAddMode!: boolean;

  constructor(private _fb: FormBuilder,
    private _clienteService: ClienteService,
    private _router: Router,
    private _aRouter: ActivatedRoute,
    private _snackBar: MatSnackBar) {}

  ngOnInit(): void {
    this.id = this._aRouter.snapshot.paramMap.get('id')
    this.isAddMode = !this.id;
  
    this.clienteForm = this._fb.group({
      id: ['', Validators.required],
      nombre: ['', Validators.required],
      calle: ['', Validators.required],
      numero: ['', Validators.required],
      telefono: ['', Validators.required],
      email: ['', Validators.required],
      socio: ['', Validators.required]
    });

    if (!this.isAddMode) {
      this._clienteService.getClienteId(this.id!)
          .pipe(first())
          .subscribe(x => this.clienteForm.patchValue(x));
  }
}

  onSubmit(){
    if (this.isAddMode) {
      this.addCliente();
  } else {
      this.editCliente();
  } 
  }

  private addCliente() {
    this._clienteService.addCliente(this.clienteForm.value)
            .pipe(first())
            .subscribe({
                next: () => {
                    this._router.navigate(['/dashboard/clientes']);
                }
            });
  }

  private editCliente() {
    this._clienteService.editCliente(this.id!, this.clienteForm.value)
        .pipe(first())
        .subscribe({
            next: () => {
              this._router.navigate(['/dashboard/clientes']);
            }
        });
}
  
////  editCliente() {
//    if (this.id !== null) {
//      this._clienteService.getCliente().subscribe(data => {
//        this.clienteForm.setValue({
//          id: this.id,
//          nombre: data[0]._nombre,
//          calle: data[0]._direccion.calle,
//          numero: data[0]._direccion.numero,
//          telefono: data[0]._telefono,
//          email: data[0]._email,
//          socio: data[0]._socio,
//        })
//      })
//    }
//  }
//
}
