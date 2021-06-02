import { createGlobalStyle } from "styled-components"

const StyleGlobal = createGlobalStyle`
    *, 
    *::after, 
    *::before {
        box-sizing: border-box;
        margin: 0;
        padding: 0;


    }

    html {
        margin: 0;
        padding: 0;
        overflow-x: hidden;
    }

    body {
        font-family: 'Poppins', sans-serif;
    }
`

export default StyleGlobal
