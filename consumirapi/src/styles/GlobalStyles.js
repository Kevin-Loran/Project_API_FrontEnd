import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

import * as colors from "../config/colors";
import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    outline: none;
    box-sizing: border-box;
}

body {
    font-family: sans-serif;
    background: #eee;
    background: ${colors.primaryDarkColor};
    color: #fff
}

html, body, #root {
    height: 100%;
}

a {
    text-decoration: none;
}

ul {
    list-style: none;
}

body .Toastify .Toastify__toast-container .Toastify__toast--success {
    background: ${colors.successColor} ;
}

body .Toastify .Toastify__toast-container .Toastify__toast--error {
    background: ${colors.errorColor} ;
}


button {
    cursor: pointer;
    background-color: ${colors.primaryColor};
    border: none;
    color: #fff;
    padding: 10px 20px;
    border-radius: 4px;
    font-weight: 700;
}
`;

export const Conteiner = styled.section`
    max-width: 360px;
    background: #fff;
    color: #333;

    margin: 30px auto;
    padding: 30px;

    border-radius: 4px;

    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;


