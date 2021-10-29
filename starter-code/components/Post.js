export function Post(props) {
    let {id, name, images, artist, description, year, source} = props;
    document.querySelector(".estilosDinamicos").innerHTML += `
        .sectionPost {
            padding:20px;
            position:relative;
        }
        .primerDiv {
            position:relative;
        }
        .imagenPostCuadro {
            width:100%;
            height: auto;
        }
        .divEnlaceFoto {
            position:absolute;
            top:25px;
            left:20px;
        }
        .enlaceFoto {
            text-decoration:none;
            font-size: 10px;
            line-height: 12px;
            text-align: right;
            letter-spacing: 2.14286px;
            color: #FFFFFF;
            background-color: #000000;
            mix-blend-mode: normal;
            opacity: 0.75;
            padding:10px;
        }
        .imagenEnlaceFoto {
            margin-right:5px;
            width:8px;
        }
        .divImagen {
            background-color:white;
            position:absolute;
            bottom: 0px;
            width:80%;
        }
        .nombrePintura {
            font-weight: bold;
            font-size: 24px;
            line-height: 29px;
            color: #000000;
            margin:8px;
        }
        .nombreAutor {
            font-size: 15px;
            line-height: 19px;
            color: #7D7D7D;
            margin:10px;
            margin-bottom:0px;
        }
        .divImagenArtista {
            margin-top:30px;
        }
        .imagenArtista {
            width:64px;
        }
        .divAño {
            position:absolute;
            top:-142px;
            right:20px;
            z-index:-1;
        }
        .año {
            font-weight: bold;
            font-size: 100px;
            line-height: 100px;
            text-align: right;
            color: #F3F3F3;
        }
        .contenido {
            font-weight: bold;
            font-size: 14px;
            line-height: 28px;
            color: #7D7D7D;
            margin-bottom:70px;
        }
        .enlace {
            font-weight: bold;
            font-size: 9px;
            line-height: 11px;
            letter-spacing: 1.92857px;
            text-decoration-line: underline;
            color: #7D7D7D;
        }
        .barra {
            width:100%;
            background-color:#E5E5E5;
            height:1px;
        }
        .barra::-webkit-progress-bar {
            background-color:#E5E5E5;
        }
        .barra::-webkit-progress-value {
            background-color:black;
        }
        .ultimoDiv {
            padding:20px;
            display:flex;
            justify-content:space-between;
            align-items:center;
        }
        .abajoPintura {
            font-size: 14px;
            line-height: 17px;
        }
        .abajoAutor {
            font-size: 10px;
            line-height: 12px;
            mix-blend-mode: normal;
            opacity: 0.75;
        }
        .divBoton {
            display:flex;
            justify-content:space-between;
            align-items:center;
            gap:5px;
        }
        .boton {
            border:none;
            outline: none;
            background-color:transparent;
        }
        .atras::after {
            content:url("../assets/shared/icon-back-button.svg");
        }
        .siguiente::after {
            content:url("../assets/shared/icon-next-button.svg");
        }
        .imagenLarga, .imagenCorta {
            display:none;
        }
        @media all and (min-width:660px) {
            .imagenPostCuadro {
                display:none;
            }
            .imagenLarga {
                display:initial;
                max-width:100%;
                height:auto;
                border:none;
            }
            .primerSection {
                display:grid;
                grid-template-columns:1fr 200px;
            }
            .divImagen {
                right: -100px;
                top: -0.1px;
                bottom: initial;
                width: 300px;
                padding:0px 0px 30px 80px;

            }
            .nombrePintura {
                margin:0px;
                width: 250px;
                font-weight: bold;
                font-size: 56px;
                line-height: 64px;
            }
            .nombreAutor {
                margin:0px;
            }
            .divImagenArtista {
                margin-top: 80%;
                justify-self: center;
                align-self:center;
            }
            .imagenArtista {
                width: 128px;
            }
            .abajoPintura {
                width:auto;
                font-weight: bold;
                font-size: 18px;
                line-height: 22px;
                color: #000000;
                margin-bottom:10px;
            }
            .divAño {
                top:-150px;
                right:initial;
                left:20px;
            }
            .año {
                font-size: 200px;
                line-height: 150px;
                text-align: right;
                color: #F3F3F3;
            }
            .divEnlaceFoto {
                top: 90%;
            }
            .divEnlaceFoto:hover {
                opacity:0.7;
            }
            .divContenido {
                width:80%;
                margin:0px auto;
            }
            .contenido {
                margin-top:80px;
                margin-bottom:40px;
            }
        }
        @media all and (min-width:1400px) {
            .primerArticle {
                display: grid;
                grid-template-columns:1fr 1fr;
                grid-template-rows:1fr 100px;
                gap:100px;
                grid-template-areas:
                "izquierda derecha"
                "abajo     abajo";
            }
            .primerSection {
                grid-area:izquierda;
            }
            .divImagen {
                padding: 0px 0px 80px 80px;
                width:280px;
            }
            .divImagenArtista {
                align-self: flex-end;
                transform:translateY(100px);
            }
            .nombrePintura {
                width: 300px;
            }
            .segundoSection {
                grid-area:derecha;
            }
            .divContenido {
                margin:0px;
                
            }
            .contenido {
                margin-top: 150px;
            }
            .tercerSection {
                grid-area:abajo;
            }
            .imagenCorta {
                display:initial;
            }
            .imagenLarga {
                display:none;
            }
            .enlaceFoto:hover {
                background-color:rgba(0, 0, 0, 0.763);
                color:white;
            }
            .boton {
                cursor:pointer;
            }
        }
    `;
    return `
        <article class="primerArticle">
            <section class="sectionPost primerSection">
                <div class="primerDiv">
                    <img src="${images.thumbnail}" alt="imagen de ${name}" class="imagenPostCuadro">
                    <img src="${images.hero.large}" alt="imagen de ${name}" class="imagenLarga">
                    <img src="${images.hero.small}" alt="imagen de ${name}" class="imagenCorta">
                    <div class="divEnlaceFoto">
                        <a href="${images.gallery}" class="enlaceFoto" data-fslightbox  data-alt="imagen de ${name}">
                            <img src="../assets/shared/icon-view-image.svg" class="imagenEnlaceFoto">
                            VIEW IMAGE
                        </a>
                    </div> 
                    <div class="divImagen">
                        <p class="nombrePintura">${name}</p>
                        <p class="nombreAutor">${artist.name}</p>
                    </div>
                </div>
                <div class="divImagenArtista">
                    <img src="${artist.image}" alt="imagen de ${artist.name}" class="imagenArtista">
                </div>
            </section>
            <section class="sectionPost segundoSection">
                <div class="divAño">
                    <p class="año">${year}</p>
                </div>
                <div class="divContenido">
                    <p class="contenido">${description}</p>
                    <a href="${source}" class="enlace" target="_BLANK">GO TO SOURCE</a>
                </div>
            </section>
            <section class="tercerSection">
                <progress min="0" max="15" value="${id}" class="barra"></progress>
                <div class="ultimoDiv">
                    <div>
                        <p class="nombrePintura abajoPintura">${name}</p>
                        <p class="nombreAutor abajoAutor">${artist.name}</p>
                    </div>
                    <div class="divBoton">
                        <button class="boton atras" data-id="${id}"></button>
                        <button class="boton siguiente" data-id="${id}"></button>
                    </div>
                </div>
            </section>
        </article>
    `;
}