export default class Kep {
  #obj = {};
  #index = 0;
  constructor(obj = { src, cim, leiras }, index, szuloElem) {
    this.#obj = obj;
    this.#index = index;
    this.szuloElem = szuloElem;
    this.megjelenit();
    this.sajatEsemeny();
  }


  getObj() {
    return this.#obj;
  }

  esemenykezelo() {
    const kepElem = document.querySelector(".kartya:last-child img");
    kepElem.addEventListener("click", (event) => {
      console.log("event.target", event.target);
      console.log("this", this);
      this.sajatEsemeny();
    });
  }

  sajatEsemeny() {
    const e = new CustomEvent("kivalaszt", { detail: this.#index });
    window.dispatchEvent(e);
  }

  megjelenit() {
    let a = `<div class="kartya">
                    <img src="${this.#obj.src}" alt="${this.#obj.leiras}" title="${this.#obj.leiras}">
                    <p>${this.#obj.cim}</p>
                    <p>${this.#obj.leiras}</p>
                </div>
            `;
    this.szuloElem.insertAdjacentHTML("beforeend", a);
    this.esemenykezelo();
  }
} //class
