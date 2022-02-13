import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DispositivoService {
  baseUrl = 'https://api-vapehub.herokuapp.com/dispositivos'

  constructor(private http: HttpClient) { }

  getDispositivo(): Observable<any> {
    return this.http.get(this.baseUrl);
  }

  getDispositivoId(id: string): Observable<any> {
    return this.http.get(this.baseUrl + '/' + id);
  }

}
