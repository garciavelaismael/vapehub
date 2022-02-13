import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { EmpleadoService } from 'src/app/services/empleado.service';

@Component({
  selector: 'app-crear-empleado',
  templateUrl: './crear-empleado.component.html',
  styleUrls: ['./crear-empleado.component.css']
})
export class CrearEmpleadoComponent implements OnInit {
  empleadoForm!: FormGroup;
  id!: string;
  isAddMode!: boolean;

  constructor(
    private _fb: FormBuilder,
    private _empleadoService: EmpleadoService,
    private _aRouter: ActivatedRoute,
    private _snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.id = this._aRouter.snapshot.params['id'];
    this.isAddMode = !this.id;

    this.empleadoForm = this._fb.group({
      id: ['', Validators.required],
      nombre: ['', Validators.required],
      calle: ['', Validators.required],
      numero: ['', Validators.required],
      telefono: ['', Validators.required],
      email: ['', Validators.required],
      ventas: ['', Validators.required],
      horas: ['', Validators.required]
    });

    if (!this.isAddMode) {
      this.inputEmpleado();
    }
  }

  onSubmit() {
    if (this.isAddMode) {
      this.addEmpleado();
    } else {
      this.editEmpleado();
    }
  }

  addEmpleado() {
    this._empleadoService.addEmpleado(this.empleadoForm.value)
      .pipe(first())
      .subscribe();
      this._snackBar.open('Empleado añadido correctamente', '', {
        duration: 1500,
        horizontalPosition: 'center',
        verticalPosition: 'bottom'
      })
      this.empleadoForm.reset();
  }

  inputEmpleado() {
    this._empleadoService.getEmpleadoId(this.id).subscribe(data => {
      console.log(data);
      this.empleadoForm.setValue({
        id: data._id,
        nombre: data._nombre,
        calle: data._direccion.calle,
        numero: data._direccion.numero,
        telefono: data._telefono,
        email: data._email,
        ventas: data._ventas,
        horas: data._horas,
      })
    })
  }

  editEmpleado() {
    this._empleadoService.editEmpleado(this.id!, this.empleadoForm.value)
      .pipe(first())
      .subscribe();
      this._snackBar.open('Empleado editado correctamente', '', {
        duration: 1500,
        horizontalPosition: 'center',
        verticalPosition: 'bottom'
      });
  }
}
