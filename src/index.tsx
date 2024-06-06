import React from 'react';
import ReactDOM from 'react-dom';
import Converter from './components/Converter';


const App = () => (
  <div>
    <h1>Converrcy</h1>
    <Converter />
  </div>
);

ReactDOM.render(<App />, document.getElementById('root'));