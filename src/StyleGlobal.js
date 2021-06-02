import { createGlobalStyle } from "styled-components"

const StyleGlobal = createGlobalStyle`
    *, *::after, *::before {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    body {
        font-family: 'Poppins', sans-serif;
    }
`

export default StyleGlobal
