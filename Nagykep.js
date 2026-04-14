export default class Nagykep {
  #obj = {};

  constructor(obj, szuloElem) {
    this.#obj = obj;
    this.szuloElem = szuloElem;
    this.szuloElem.innerHTML = "";
    this.megjelenit();
  }

  getObj() {
    return this.#obj;
  }

  megjelenit() {
    let a = `<div class="kartya">
      <img src="${this.#obj.src}" alt="${this.#obj.leiras}" title="${this.#obj.leiras}">
      <p>${this.#obj.cim}</p>
      <p>${this.#obj.leiras}</p>
    </div>`;

    this.szuloElem.insertAdjacentHTML("beforeend", a);
  }
}
