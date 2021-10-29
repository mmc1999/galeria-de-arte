import { Post } from "../components/Post.js";
import { apiFetch } from "./ajax.js";


let expresion = /[0-9]{1,2}/;
        


export function cambiarURL() {
    let numero = 1;
    numero = parseInt(location.hash.match(expresion)[0]);
    const $main = document.querySelector("#main");
    setTimeout(() => {
        switch (numero) {
            case 1:
                document.querySelector(".atras").disabled = true;
                document.querySelector(".atras").style.opacity = "0.5";
                break;
            case 15:
                document.querySelector(".siguiente").disabled = true;
                document.querySelector(".siguiente").style.opacity = "0.5";
                break
            default:
                break;
        }
    }, 100);
    document.addEventListener("click", e => {
        let dataID = parseInt(e.target.dataset.id);
        if(e.target.matches(".atras")) {
            apiFetch({
                cbSuccess:(data) => {
                    numero--;
                    let nombreURL = data[(numero-1)].name.split(" ").join("-");
                    location.hash = `#/${data[(numero-1)].id}-${nombreURL}`
                    $main.innerHTML = Post(data[(numero-1)]);
                    $main.innerHTML = ""
                    if(dataID-1 == "1") {
                        document.querySelector(".atras").disabled = true;
                        document.querySelector(".atras").style.opacity = "0.5";
                        dataID = 1;
                    } else {
                        document.querySelector(".atras").disabled = false;
                        document.querySelector(".atras").style.opacity = "1";
                    }
                }
            });
        }
        if(e.target.matches(".siguiente")) {
            apiFetch({
                cbSuccess:(data) => {
                    numero++;
                    let nombreURL = data[(numero-1)].name.split(" ").join("-");
                    location.hash = `#/${data[(numero-1)].id}-${nombreURL}`
                    $main.innerHTML = Post(data[(numero-1)])
                    $main.innerHTML = ""
                    if(dataID+1 == "15") {
                        document.querySelector(".siguiente").disabled = true;
                        document.querySelector(".siguiente").style.opacity = "0.5";
                        dataID = 15;
                    } else {
                        document.querySelector(".siguiente").disabled = false;
                        document.querySelector(".siguiente").style.opacity = "1";
                    }
                }
            });
        } 
    }); 
}

