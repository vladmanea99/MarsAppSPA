import React from 'react';
import logo from './logo.svg';
import './App.css';
import NasaComponent from './NasaComponent';
import ClickCountComponent from "./ClickCountComponent";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NasaComponent/>
        <ClickCountComponent/>
      </header>
    </div>
  );
}

export default App;
