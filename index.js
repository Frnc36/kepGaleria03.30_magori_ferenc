import { kepekLista } from "./adat.js";
import Nagykep from "./Nagykep.js";
import Kepek from "./Kepek.js";

const szuloElem = document.querySelector(".tarolo");
const nagykepElem = document.querySelector(".nagykep");
const kivalasztElem = document.querySelector(".kivalasztott");
new Kepek(kepekLista, szuloElem);
new Nagykep(kepekLista[0], nagykepElem);


window.addEventListener("kivalaszt", function (event) {

  new Nagykep(kepekLista[event.detail], nagykepElem);
});