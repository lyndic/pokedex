import React from 'react';
import pokeball from './pokeball.png';
import logo from './pokedex_logo.png';
import './App.css';

import Pokedex from './components/Pokedex';
import BottomScreen from './components/BottomScreen';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} />
      </header>
      <Pokedex />
    </div>
  );
}

export default App;
