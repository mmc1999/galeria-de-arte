export function Header() {
    const $header = document.querySelector("#header");
    document.querySelector(".estilosDinamicos").innerHTML = `
        html {
            box-sizing: border-box;
        }
        *, *::before, *::after {
            box-sizing: inherit;
        }
        body {
            margin: 0px;
            font-family: 'Libre Baskerville', serif;
            overflow-x: hidden;
        }
        
        header {
            display: flex;
            justify-content:space-between;
            align-items:center;
            padding:20px;
            border-bottom: thin solid #E5E5E5;
        }
        .logoHeader {
            width:120px;
        }
        .palabrasHeader {
            font-weight: bold;
            font-size: 9px;
            line-height: 11px;
            text-align: right;
            letter-spacing: 1.92857px;
            color: #7D7D7D;
        }

       
    `;
    $header.innerHTML = `
        <div>
            <a href="index.html"><img src="./assets/shared/logo.svg" alt="logo" class="logoHeader"></a>
        </div>
        <div>
            <p class="palabrasHeader">START SLIDESHOW</p>
        </div>
    `;
    return $header;
}