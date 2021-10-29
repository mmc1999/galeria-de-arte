export function Posts(props) {
    let {id, images, artist, name} = props;
    let nombreURL = name.split(" ").join("-");
    /*document.querySelector(".estilosDinamicos").innerHTML += `
        main {
            padding:20px;
        }
        .articlePost {
            position:relative;
            margin:15px auto;
        }
        .imagenPosts {
            width: 100%;
            height: auto;
        }
        .divImagen {
            position:absolute;
            z-index:2;
            bottom:20px;
            left:20px;
        }
        a {
            text-decoration:none;
        }
        .nombrePintura {
            font-weight: bold;
            font-size: 24px;
            line-height: 30px;
            color: #FFFFFF;
            margin:0px;
        }
        .nombreAutor {
            font-size: 13px;
            line-height: 16px;
            color: #FFFFFF;
            mix-blend-mode: normal;
            opacity: 0.75;
            margin:0px;
        }
        @media all and (min-width:660px) {
            main {
                display: grid;
                align-items: flex-start;
                gap:20px;
                grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
                grid-auto-rows: minmax(180px, auto);
                grid-auto-flow: dense;
            }
            .articlePost {

            }
        }
    `;*/
    return `
        <a href="#/${id}-${nombreURL}" class="articlePost">
            <img src="${images.thumbnail}" alt="imagen de ${name}" class="imagenPosts" data-id="${id}">
            <div class="divImagen">
                <p class="nombrePintura" data-id="${id}">${name}</p>
                <p class="nombreAutor" data-id="${id}">${artist.name}</p>
            </div>
        </a>
        `
}