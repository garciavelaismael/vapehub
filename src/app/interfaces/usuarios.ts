import { Producto } from "./productos";

export class Persona {
  public _id: string;
  public _nombre: string;
  public _direccion: { calle: string; numero: number };
  public _telefono: number;
  public _email: string;
  constructor(
    id: string,
    nombre: string,
    direccion: { calle: string; numero: number },
    telefono: number,
    email: string,
  ) {
    this._id = id;
    this._nombre = nombre;
    this._direccion = direccion;
    this._telefono = telefono;
    this._email = email;
  }
  get id() {
    return this._id;
  }
  get nombre() {
    return this._nombre;
  }
  get direccion() {
    return this._direccion;
  }
  get telefono() {
    return this._telefono;
  }
  get email() {
    return this._email;
  }

  todo() {
    return `ID: ${this._id}, 
    Nombre: ${this._nombre}, 
    Direccion: ${this._direccion}, 
    Telefono: ${this._telefono}, 
    Email : ${this._email}`;
  }

}

export class Cliente extends Persona {
  public _socio: boolean;
  constructor(
    id: string,
    nombre: string,
    direccion: { calle: string; numero: number },
    telefono: number,
    email: string,
    socio: boolean,
  ) {
    super(id, nombre, direccion, telefono, email);
    this._socio = socio;
  }
  get socio() {
    return this._socio;
  }
}


export class Compra {

  protected _id: string;
  protected _nombreCliente: string;
  protected _coste: number;
  protected _productos: Array<Producto>;

  constructor(_id: string, _nombreCliente: string, _coste: number, _productos: Array<Producto>) {
    this._id = _id;
    this._nombreCliente = _nombreCliente;
    this._coste = _coste;
    this._productos = _productos;
  }

  get getId() {
    return this._id;
  }
  get getCliente() {
    return this._nombreCliente;
  }
  get getProductos() {
    return this._productos;
  }

  todoCompra() {
    return `ID: ${this._id}, 
        : nombreCliente: ${this._nombreCliente}, 
        coste: ${this._coste},
        productos:  ${this._productos}`;
  }
}


export class Empleado extends Persona {
  protected _ventas: number;
  protected _horas: number;
  constructor(
    id: string,
    nombre: string,
    direccion: { calle: string; numero: number },
    telefono: number,
    email: string,
    ventas: number,
    horas: number,
  ) {
    super(id, nombre, direccion, telefono, email);
    this._ventas = ventas;
    this._horas = horas;
  }
  get ventas() {
    return this._ventas;
  }
  get salario(): number {
    let salario: number;
    let base: number = this._horas * 8;
    if (this._ventas > 5) {
      salario = base * 1.02
    } else if (this._ventas > 10) {
      salario = base * 1.03
    } else if (this._ventas > 20) {
      salario = base * 1.05
    } else {
      salario = base
    }
    return Math.round(salario)
  }
}

export class Salario {
  public _id: string;
  public _nombre: string;
  public _salario: number

  public constructor(
    id: string,
    nombre: string,
    salario: number,) {
    this._id = id
    this._nombre = nombre
    this._salario = salario
  }
}

// Tipos

//exporta tipo cliente
export type tCliente = {
  id: string | null;
  nombre: string | null;
  calle: string;
  numero: number;
  telefono: number | null;
  email: string | null;
  socio: Boolean | null;
};

//exporta tipo empleado
export type tEmpleado = {
  id: string | null;
  nombre: string | null;
  calle: string;
  numero: number;
  telefono: number | null;
  email: string | null;
  ventas: number | null;
  horas: number | null;
};

export type tEmpleado2 = {
  _id: string;
  _nombre: string;
  _direccion: {
    calle: string;
    numero: number;
  };
  _telefono: number;
  _email: string;
  _ventas: number;
  _horas: number;
};

export type tSalario = {
  _id: string | null;
  _nombre: string | null;
  _salario: number | null;
};

