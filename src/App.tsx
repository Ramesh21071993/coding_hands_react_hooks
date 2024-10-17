import React from 'react';
import logo from './logo.png';
import './App.css';

import UseCallback from './Hooks/UseCallback';
import UseContext from './Hooks/UseContext';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Coding Hands
        </p>
      </header>
      <body className='App-body'>
        {/* <UseCallback /> */}
        <UseContext />
      </body>
    </div>
  );
}

export default App;
