import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {
  url = 'https://api-vapehub.herokuapp.com/empleados'

  constructor(private http: HttpClient) { }

  getEmpleado(): Observable<any> {
    return this.http.get(this.url);
  }

//  eliminarCliente(index: number){
//    this.listUsuarios.splice(index, 1);
//  }
//
//  agregarCliente(usuario: Usuario){
//    this.listUsuarios.unshift(usuario);
//  }
}