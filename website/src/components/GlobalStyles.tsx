import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    :root {
        --bg: white;
        --main: #121128;
        --pink: #ffbdbc;
        --purple: #4c3ff7;
        --dark: #1B1E87;
        --yellow: #f8a832;
        --orange: #FF6804;
        --teal: #A7CAFE;
    }

    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-family: 'Poppins', sans-serif;
        color: var(--main);
    }

    button {
      background: none;
      border: none;
      outline: none;
    }
  `;

const GlobalStyles = () => {
  return <GlobalStyle />;
};

export default GlobalStyles;
