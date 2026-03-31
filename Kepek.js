import Kep from "./Kep.js";

export default class Kepek {
  #lista = [];
  constructor(lista, szuloElem) {
    this.#lista = lista;
    this.szuloElem = szuloElem;
    this.megjelenit();
  }

  megjelenit() {
    this.#lista.forEach((elem, index) => {
      new Kep(elem.src, elem.cim, elem.leiras, index, this.szuloElem);
    });
  }
}
