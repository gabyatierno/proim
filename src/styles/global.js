import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    
    @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');

    * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    }

    *::after,
    *::before {
        box-sizing: inherit;
    }

    a {
        text-decoration: none;
    }

    html, body, #root {
        height: 100%;
    }

    h1, h2, h3, h4, h5, h6 {
        font-size: 16px;
        font-weight: 300;
    }
`;

export default GlobalStyle;
