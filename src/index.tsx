import React from 'react';
import ReactDOM from 'react-dom';
import Converter from './components/Converter/Converter';
import GlobalStyle from './GlobalStyle';
import Navbar from './components/Navbar/Navbar';
import Logo from './components/Logo/Logo';

const App = () => (
  <div>
    <GlobalStyle />
    <Navbar />
    <Logo />
    <Converter />
  </div>
);

ReactDOM.render(<App />, document.getElementById('root'));
