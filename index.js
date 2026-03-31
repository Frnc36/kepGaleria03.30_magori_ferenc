import { kepekLista } from "./adat.js";

import Kep from "./Kep.js";
import Kepek from "./Kepek.js";

const szuloElem = document.querySelector(".tarolo");

new Kepek(kepekLista, szuloElem);

const KIVALASZTOTTLISTA = [];
window.addEventListener("kiválaszt", function (event) {
  console.log(event.detail);
  KIVALASZTOTTLISTA.push(kutyaLista[event.detail]);
  new Kepek(KIVALASZTOTTLISTA, kedvencElem);
});