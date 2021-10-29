import { Header } from "./components/Header.js";
import { Router } from "./components/Router.js";

let $main = document.querySelector("#main"),
    $header = document.querySelector("#header");

export function App() {
    $header.innerHTML = null;   
    $main.innerHTML = null;   
    $main.insertAdjacentElement("beforebegin", Header());
    Router();
}

