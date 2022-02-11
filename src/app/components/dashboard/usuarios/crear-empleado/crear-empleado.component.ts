import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { tEmpleado } from 'src/app/interfaces/usuarios';
import { EmpleadoService } from 'src/app/services/empleado.service';

@Component({
  selector: 'app-crear-empleado',
  templateUrl: './crear-empleado.component.html',
  styleUrls: ['./crear-empleado.component.css']
})
export class CrearEmpleadoComponent implements OnInit {
  empleadoForm: FormGroup;
  id!: string | null;
  
  constructor(private fb: FormBuilder,
    private _empleadoService: EmpleadoService,
    private router: Router,
    private aRouter: ActivatedRoute,
    private _changeDetectorRefs: ChangeDetectorRef,
    private _snackBar: MatSnackBar) {
      this.empleadoForm = this.fb.group({
        id: ['', Validators.required],
        nombre: ['', Validators.required],
        calle: ['', Validators.required],
        numero: ['', Validators.required],
        telefono: ['', Validators.required],
        email: ['', Validators.required],
        puesto: ['', Validators.required],
        ventas: ['', Validators.required],
        horas: ['', Validators.required]
      })
    this.id = this.aRouter.snapshot.paramMap.get('id')
  }
  
  ngOnInit(): void {
    this.editEmpleado();
  }

  addEmpleado() {
    const EMPLEADO: tEmpleado = {
      id: this.empleadoForm.get('id')?.value,
      nombre: this.empleadoForm.get('nombre')?.value,
      calle: this.empleadoForm.get('calle')?.value,
      numero: this.empleadoForm.get('numero')?.value,
      telefono: this.empleadoForm.get('telefono')?.value,
      email: this.empleadoForm.get('email')?.value,
      puesto: this.empleadoForm.get('puesto')?.value,
      ventas: this.empleadoForm.get('ventas')?.value,
      horas: this.empleadoForm.get('horas')?.value,
    }
    if(this.id !== null){
      this._empleadoService.editEmpleado(this.id, EMPLEADO).subscribe();    
      this.router.navigate(['/dashboard/empleados']);
    } else {
      this._empleadoService.addEmpleado(EMPLEADO).subscribe();    
      this.empleadoForm.reset();
    }
  }
  
  editEmpleado(){
    if (this.id !== null)
    this._empleadoService.getEmpleado().subscribe(data => {
      this.empleadoForm.setValue({
        id: this.id,
        nombre: data[0]._nombre,
        calle: data[0]._direccion.calle,
        numero: data[0]._direccion.numero,
        telefono: data[0]._telefono,
        email: data[0]._email,
        puesto: data[0]._puesto,
        ventas: data[0]._ventas,
        horas: data[0]._horas
      })
    })
  }
  
}

