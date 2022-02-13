import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
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
  id!: string;
  isAddMode!: boolean;

  constructor(
    private _fb: FormBuilder,
    private _clienteService: ClienteService,
    private _router: Router,
    private _aRouter: ActivatedRoute,
    private _snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.id = this._aRouter.snapshot.params['id'];
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
      this.inputCliente();
    }
  }

  onSubmit() {
    if (this.isAddMode) {
      this.addCliente();
    } else {
      this.editCliente();
    }
  }

  addCliente() {
    this._clienteService.addCliente(this.clienteForm.value)
      .pipe(first())
      .subscribe();
  }

  inputCliente() {
    this._clienteService.getClienteId(this.id).subscribe(data => {
      console.log(data);
      this.clienteForm.setValue({
        id: data._id,
        nombre: data._nombre,
        calle: data._direccion.calle,
        numero: data._direccion.numero,
        telefono: data._telefono,
        email: data._email,
        socio: data._socio,
      })
    })
  }

  editCliente() {
    this._clienteService.editCliente(this.id!, this.clienteForm.value)
      .pipe(first())
      .subscribe();
  }
}
