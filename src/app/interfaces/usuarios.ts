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
  protected _idCliente: string;
  protected _coste: number;
  protected _idProducto: string;

  constructor(id: string, idCliente: string, coste: number, idProducto: string) {
    this._id = id;
    this._idCliente = idCliente;
    this._coste = coste;
    this._idProducto = idProducto;
  }

  get getId() {
    return this._id;
  }
  get getCliente() {
    return this._idCliente;
  }
  get getProductos() {
    return this._idProducto;
  }
  todoCompra() {
    return `ID: ${this._id}, 
      : nombreCliente: ${this._idCliente}, 
      coste: ${this._coste},
      productos:  ${this._idProducto}`;
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

