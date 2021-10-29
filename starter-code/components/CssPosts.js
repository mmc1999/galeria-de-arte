export function CssPosts() {
    document.querySelector(".estilosDinamicos").innerHTML += `
    main {
        padding:20px;
        display:flex;
        flex-direction:column;
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
            /*display:flex;
            flex-wrap:wrap;
            align-items:flex-start;
            flex-direction:row;*/
            display:inherit;
            columns: 6 350px;
		    column-gap: 1rem;
            
        }
        .articlePost {
            width: 310px;
            height:auto;
            margin:20px 0px;
        }
        .imagenPosts:hover {
            opacity: 0.7;
            transition:opacity 500ms ease-in-out;
        }
    }`;
}

