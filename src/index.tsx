import React from 'react';
import ReactDOM from 'react-dom';
import Converter from './components/Converter/Converter';
import GlobalStyle from './GlobalStyle';
import Navbar from './components/Navbar/Navbar';
import Paragraph from './components/Paragraph/Paragraph';

const App = () => (
  <div id="app">
    <GlobalStyle />
    <Navbar />
    <Paragraph />
    <Converter />
  </div>
);

ReactDOM.render(<App />, document.getElementById('root'));
