import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tCliente } from '../interfaces/usuarios';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  baseUrl = 'https://api-vapehub.herokuapp.com/clientes'

  constructor(private http: HttpClient) { }

  getCliente(): Observable<any> {
    return this.http.get(this.baseUrl);
  }

  getClienteId(id: string): Observable<any> {
    return this.http.get(this.baseUrl + '/' + id);
  }

  deleteCliente(id: any): Observable<any> {
    return this.http.delete(this.baseUrl + '/delete/' + id, { responseType: 'text' })
  }

  addCliente(cliente: tCliente): Observable<any> {
    return this.http.post(this.baseUrl + '/addCliente', cliente)
  }

  editCliente(id: string, cliente: tCliente): Observable<any> {
    return this.http.put(this.baseUrl + '/update/' + id, cliente)
  }


}
