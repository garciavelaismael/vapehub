import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Cliente, tCliente } from 'src/app/interfaces/usuarios';
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-crear-cliente',
  templateUrl: './crear-cliente.component.html',
  styleUrls: ['./crear-cliente.component.css']
})
export class CrearClienteComponent implements OnInit {
  clienteForm: FormGroup;
  id: string | null;

  constructor(private fb: FormBuilder,
    private _clienteService: ClienteService,
    private router: Router,
    private aRouter: ActivatedRoute,
    private _snackBar: MatSnackBar) {
    this.clienteForm = this.fb.group({
      id: ['', Validators.required],
      nombre: ['', Validators.required],
      calle: ['', Validators.required],
      numero: ['', Validators.required],
      telefono: ['', Validators.required],
      email: ['', Validators.required],
      socio: ['', Validators.required],
    })
    this.id = this.aRouter.snapshot.paramMap.get('id')
  }
  
  crearCliente() {
    const CLIENTE: tCliente = {
      _id: this.clienteForm.get('id')?.value,
      _nombre: this.clienteForm.get('nombre')?.value,
      _calle: this.clienteForm.get('calle')?.value,
      _numero: this.clienteForm.get('numero')?.value,
      _telefono: this.clienteForm.get('telefono')?.value,
      _email: this.clienteForm.get('email')?.value,
      _socio: this.clienteForm.get('socio')?.value,
      _carrito: this.clienteForm.get('carrito')?.value
    }

//    if (this.id !== null) {
//      this._clienteService.editarCliente(this.id, CLIENTE).subscribe()
//      this.toastr.info('El cliente fue actualizado correctamente', 'Cliente actualizado');
//    } else {
      this._clienteService.agregarCliente(CLIENTE).subscribe()
      this.clienteForm.reset()
  }
  
  

  ngOnInit(): void {
  }
}
