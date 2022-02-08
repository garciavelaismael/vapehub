import { Injectable } from '@angular/core';
import { Usuario } from '../interfaces/usuario';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  listUsuarios: Usuario[] = [
    { dni: "1", nombre: 'Juan', apellido: "García", sexo: 'Masculino' },
    { dni: "2", nombre: 'Luis', apellido: "Pérez", sexo: 'Masculino' },
    { dni: "3", nombre: 'Fran', apellido: "Piedra", sexo: 'Masculino' },
    { dni: "4", nombre: 'Maria', apellido: "López", sexo: 'Femenino' },
    { dni: "5", nombre: 'Pedro', apellido: "Olmedo", sexo: 'Masculino' },
    { dni: "6", nombre: 'Israel', apellido: "Reyes", sexo: 'Masculino' },
    { dni: "7", nombre: 'Andres', apellido: "Trujillo", sexo: 'Masculino' }
  ];
  constructor() { }

  getCliente(){
    return this.listUsuarios.slice();
  }

  eliminarCliente(index: number){
    this.listUsuarios.splice(index, 1);
  }

  agregarCliente(usuario: Usuario){
    this.listUsuarios.unshift(usuario);
  }
}
