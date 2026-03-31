export default class Kep {
  #src = "";
  #cim = "";
  #leiras = "";
  #index = 0;
  constructor(src, cim, leiras, index, szuloElem, kepElem) {
    this.#src = src;
    this.#cim = cim;
    this.#leiras = leiras;
    this.#index = index;
    this.szuloElem = szuloElem;
    this.kepElem = kepElem;
    this.megjelenit();
    this.sajatEsemeny();
  }

  getSrc() {
    return this.#src;
  }

  getCim() {
    return this.#cim;
  }

  getLeiras() {
    return this.#leiras;
  }

  getIndex() {
    return this.#index;
  }

  esemenykezelo() {
    const kepElem = document.querySelector(".kartya:last-child img");
    console.log(kepElem);
    kepElem.addEventListener("click", (event) => {
      console.log("event.target", event.target);
      console.log("this", this);
      this.sajatEsemeny();
    });
  }

  sajatEsemeny() {
    const e = new CustomEvent("kiválaszt", { detail: this.#index });
    window.dispatchEvent(e);
  }

  megjelenit() {
    let a = `<div class="kartya">
                    <img src="${this.#src}" alt="${this.#leiras}" title="${this.#leiras}">
                    <p>${this.#cim}</p>
                    <p>${this.#leiras}</p>
                </div>
            `;
    this.szuloElem.insertAdjacentHTML("beforeend", a);
     this.esemenykezelo();
  }
} //class
