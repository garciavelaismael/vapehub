import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tCompra } from '../interfaces/compra';

@Injectable({
  providedIn: 'root'
})
export class CompraService {
  baseUrl = 'https://api-vapehub.herokuapp.com'

  constructor(private http: HttpClient) { }

  addCompra(compra: tCompra): Observable<any> {
    return this.http.post(this.baseUrl + '/addCompra', compra)
  }
}
