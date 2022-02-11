export class Producto {
  protected _id: string;
  protected _nombreProd: string;
  protected _marca: string;
  protected _coste: number;

  constructor(id: string, nombreProd: string, marca: string, coste: number) {
    this._id = id;
    this._nombreProd = nombreProd;
    this._marca = marca;
    this._coste = coste;
  }

  get id() {
    return this._id;
  }
  get nombreProd() {
    return this._nombreProd;
  }
  get marca() {
    return this._marca;
  }
  get coste() {
    return this._coste;
  }

  todoProd() {
    return `ID: ${this._id}, 
        Nombre de producto: ${this._nombreProd}, 
        Marca: ${this._marca}
        coste ${this._coste}`;
  }
}


export class Liquido extends Producto {

  protected _sabor: string;
  protected _nicotina: number;

  constructor(
    id: string,
    nombreProd: string,
    marca: string,
    sabor: string,
    nicotina: number,
    coste: number
  ) {
    super(id, nombreProd, marca, coste);

    this._sabor = sabor;
    this._nicotina = nicotina;
  }
  get sabor() {
    return this._sabor;
  }
  get nicotina() {
    return this._nicotina;
  }
}

export class Dispositivo extends Producto {
  protected _potencia: number;
  protected _bateria: number;

  constructor(
    id: string,
    nombreProd: string,
    marca: string,
    potencia: number,
    bateria: number,
    coste: number
  ) {
    super(id, nombreProd, marca, coste);

    this._potencia = potencia;
    this._bateria = bateria;
  }
  get potencia() {
    return this._potencia;
  }
  get bateria() {
    return this._bateria;
  }
}

// Tipos

//exporta tipo dispositivo
export type tDispositivo = {
  _id: string | null;
  _nombreProd: string | null;
  _marca: string | null;
  _potencia: number | null;
  _bateria: number | null;
  _coste: number | null;
};

//exporta tipo liquido
export type tLiquido = {
  _id: string | null;
  _nombreProd: string | null;
  _marca: string | null;
  _sabor: string | null;
  _nicotina: number | null;
  _coste: number | null;
};