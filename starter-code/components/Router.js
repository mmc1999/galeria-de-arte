import { apiFetch } from "../helpers/ajax.js";
import { cambiarURL } from "../helpers/cambiarURL.js";
import { CssPosts } from "./CssPosts.js";
import { Post } from "./Post.js";
import { Posts } from "./Posts.js";

export async function Router() {
    let $main = document.querySelector("#main"),
        {hash} = location;
    let expresion = /[0-9]{1,2}/;
    
    if(!hash || hash === "#/") {
        apiFetch({
            cbSuccess:(data) => {
                let html = "";
                CssPosts()
                data.forEach(el => {
                    html += Posts(el);
                });
                $main.innerHTML = html;   
            }
        }); 
    } else if(expresion.test(hash)) {
        let numero = parseInt(hash.match(expresion)[0])
        apiFetch({
            cbSuccess:(data) => {
                
                $main.innerHTML = Post(data[numero-1])
            }
        });
        cambiarURL(); 
    }
}