import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LiquidoService {
  baseUrl = 'https://api-vapehub.herokuapp.com/liquidos'

  constructor(private http: HttpClient) { }

  getLiquido(): Observable<any> {
    return this.http.get(this.baseUrl);
  }

  getLiquidoId(id: string): Observable<any> {
    return this.http.get(this.baseUrl + '/' + id);
  }

}
