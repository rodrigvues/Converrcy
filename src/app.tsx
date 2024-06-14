import React from 'react';
import ReactDOM from 'react-dom';
import Converter from './components/Converter/Converter';
import GlobalStyle from './GlobalStyle';
import Navbar from './components/Navbar/Navbar';
import Paragraph from './components/Paragraph/Paragraph';
import Footer from './components/Footer/Footer';

const App = () => (
  <div id="app">
    <GlobalStyle />
    <Navbar />
    <Paragraph />
    <Converter />
  </div>
);

// Render the main app component
ReactDOM.render(<App />, document.getElementById('root'));

// Render the footer component into the footer-root div
ReactDOM.render(<Footer />, document.getElementById('footer-root'));
