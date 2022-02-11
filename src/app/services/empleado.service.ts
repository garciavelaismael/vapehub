import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tEmpleado } from '../interfaces/usuarios';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {
  baseUrl = 'https://api-vapehub.herokuapp.com/empleados'

  constructor(private http: HttpClient) { }

  getEmpleado(): Observable<any> {
    return this.http.get(this.baseUrl);
  }

  deleteEmpleado(id: any): Observable<any> {
    return this.http.delete(this.baseUrl + '/delete/' + id, {responseType: 'text'})
  }
  
  addEmpleado(empleado: tEmpleado): Observable<any> {
    return this.http.post(this.baseUrl + '/addEmpleado', empleado)
  }

  editEmpleado(id: string, empleado: tEmpleado): Observable<any> {
    return this.http.put(this.baseUrl + '/update/' + id, empleado)
  }
}