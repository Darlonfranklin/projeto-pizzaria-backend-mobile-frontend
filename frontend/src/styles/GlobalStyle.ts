import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }
        :root {
            --white: #FFF;
            --black: #000;

            --dark-900: #101026;
            --dark-700: #1D1D2E;

            --gray-100: #8A8A8A;
            --green-900: #3FFFA3;
            --red-900: #FF3F4B;
        }

        button {
            cursor: pointer;
        }

        a {
            color: inherit;
            text-decoration: none;
        }

        body {
           background: var(--dark-700)
        }

        body, input, textarea, select, button {
            font: 400 1rem sans-serif;
        }

        @media(max-width: 720px) {
            html {
                font-size: 87.5%;
            }
        }

        @media(max-width: 1080px) {
            html {
                font-size: 93.75%;
            }
        }
`;
