import React from 'react';
import ReactDOM from 'react-dom';
import Converter from './components/Converter';
import GlobalStyle from './GlobalStyle';

const App = () => (
  <div>
    <h1>Converrcy Teste</h1>
    <GlobalStyle />
    <Converter />
  </div>
);

ReactDOM.render(<App />, document.getElementById('root'));