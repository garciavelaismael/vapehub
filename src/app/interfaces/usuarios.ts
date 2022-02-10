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
  public _carrito: Array<Producto>;
  public _socio: boolean;
  constructor(
    id: string,
    nombre: string,
    direccion: { calle: string; numero: number },
    telefono: number,
    email: string,
    socio: boolean,
    carrito: Array<Producto>
  ) {
    super(id, nombre, direccion, telefono, email);
    this._carrito = carrito;
    this._socio = socio;
  }
  get carrito() {
    return this._carrito;
  }
  get socio() {
    return this._socio;
  }

  agregarProducto(producto: Producto) {
    this._carrito.push(producto)
  }

  buscarProducto(id: string): Producto | undefined {
    for (const producto of this._carrito) {
      if (producto.id === id) {
        return producto;
      }
    }
    return
  }

  limpiarCarrito() {
    this._carrito.length = 0;
  }

  eliminarProducto(producto: Producto) {
    this._carrito.splice(this._carrito.indexOf(producto), 1);
    console.log("Se ha eliminado el producto!");

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
  public _puesto: string;
  constructor(
    id: string,
    nombre: string,
    direccion: { calle: string; numero: number },
    telefono: number,
    email: string,
    puesto: string,
  ) {
    super(id, nombre, direccion, telefono, email);
    this._puesto = puesto;
  }
  get puesto() {
    return this._puesto;
  }

  get salario() {
    switch (this._puesto) {
      case "Vendedor":
        return 800;
      case "Comercial":
        return 900;
      case "Transporte":
        return 850;
    }
    return 0;
  }
  override todo() {
    return `${super.todo()},\n    Salario: ${this.salario}, \n    Puesto: ${this.puesto
      }`;
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
  puesto: string | null;
};