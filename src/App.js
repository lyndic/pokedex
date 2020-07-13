import React from 'react';
import pokeball from './pokeball.png';
import logo from './pokedex_logo.png';
import './App.css';

import PokedexContainer from './components/PokedexContainer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} />
      </header>
      <PokedexContainer />
    </div>
  );
}

export default App;
