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
        overflow-x: hidden;
        overflow-y: scroll;
  
  &::-webkit-scrollbar {
    width: 0.75rem;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #ff7976;
    border: 3px solid white;
    border-radius: 1em;
  }

  &::-webkit-scrollbar-track {
    background-color: white;
  }
    }

    body {
        font-family: 'Poppins', sans-serif;
    }
`

export default StyleGlobal
