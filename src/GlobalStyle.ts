import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
    background-color: #04471C;
    color: #E0EEC6;
  }

  #root {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export default GlobalStyle;


