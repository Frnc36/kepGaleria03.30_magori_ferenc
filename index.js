import { kepekLista } from "./adat.js";
import Kepek from "./Kepek.js";

const szuloElem = document.querySelector(".tarolo");
const kivalasztElem = document.querySelector(".kivalasztott");

new Kepek(kepekLista, szuloElem);

const KIVALASZTOTTLISTA = [];
window.addEventListener("kivalaszt", function (event) {
  console.log(event.detail);
  KIVALASZTOTTLISTA.push(kepekLista[event.detail]);
  new Kepek(KIVALASZTOTTLISTA, kivalasztElem);
});