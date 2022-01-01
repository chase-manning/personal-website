import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    :root {
        --bg: white;
        --main: #121128;
        --sub: #9F9FA9;
        --pink: #ffbdbc;
        --purple: #4c3ff7;
        --dark: #1B1E87;
        --dark-bg: #00113A;
        --yellow: #f8a832;
        --orange: #FF6804;
        --teal: #A7CAFE;
    }

    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-family: 'Poppins', sans-serif;
    }

    button {
      background: none;
      border: none;
      outline: none;
    }

    a {
      color: var(--main);
      text-decoration: none;
    }

    p, h1, h2, h3 {
      color: var(--main);
    }
  `;

const GlobalStyles = () => {
  return <GlobalStyle />;
};

export default GlobalStyles;
