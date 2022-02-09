import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tCliente } from '../interfaces/usuarios';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  url = 'https://api-vapehub.herokuapp.com/clientes'

  constructor(private http: HttpClient) { }

  getCliente(): Observable<any> {
    return this.http.get(this.url);
  }

  eliminarCliente(id: any): Observable<any> {
    return this.http.delete(this.url + '/delete/' + id)
  }
  
  agregarCliente(cliente: tCliente): Observable<any> {
    return this.http.post(this.url + '/addCliente', cliente)
  }
//
//  agregarCliente(usuario: Usuario){
//    this.listUsuarios.unshift(usuario);
//  }
}
