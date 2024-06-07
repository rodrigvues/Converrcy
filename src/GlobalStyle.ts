import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Inter', sans-serif;
    background-color: #04471c; /* Change this to your desired background color */
    color: #E0EEC6; /* Optional: change the default text color */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }

  h1 {
    text-align: center;
    font-size: 50px;
  }
`;

export default GlobalStyle;
