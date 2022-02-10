import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
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
  id!: string | null;
  
  constructor(private fb: FormBuilder,
    private _clienteService: ClienteService,
    private router: Router,
    private aRouter: ActivatedRoute,
    private _changeDetectorRefs: ChangeDetectorRef,
    private _snackBar: MatSnackBar) {
      this.clienteForm = this.fb.group({
        id: ['', Validators.required],
        nombre: ['', Validators.required],
        calle: ['', Validators.required],
        numero: ['', Validators.required],
        telefono: ['', Validators.required],
        email: ['', Validators.required],
        socio: ['', Validators.required]
      })
    this.id = this.aRouter.snapshot.paramMap.get('id')
  }
  
  ngOnInit(): void {
    this.editCliente();
  }

  addCliente() {
    const CLIENTE: tCliente = {
      id: this.clienteForm.get('id')?.value,
      nombre: this.clienteForm.get('nombre')?.value,
      calle: this.clienteForm.get('calle')?.value,
      numero: this.clienteForm.get('numero')?.value,
      telefono: this.clienteForm.get('telefono')?.value,
      email: this.clienteForm.get('email')?.value,
      socio: this.clienteForm.get('socio')?.value,      
    }
    if(this.id !== null){
      this._clienteService.editCliente(this.id, CLIENTE).subscribe();    
      this.router.navigate(['/dashboard/clientes']);
    } else {
      this._clienteService.addCliente(CLIENTE).subscribe();    
      this.clienteForm.reset();
    }
  }
  
  editCliente(){
    if (this.id !== null)
    this._clienteService.getCliente().subscribe(data => {
      this.clienteForm.setValue({
        id: this.id,
        nombre: data[0]._nombre,
        calle: data[0]._direccion.calle,
        numero: data[0]._direccion.numero,
        telefono: data[0]._telefono,
        email: data[0]._email,
        socio: data[0]._socio,
      })
    })
  }
  
}
