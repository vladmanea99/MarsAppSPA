import React from 'react';
import logo from './logo.svg';
import './App.css';
import NasaComponent from './NasaComponent';
import ClickCountComponent from "./ClickCountComponent";
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import Component1 from "./Component1";

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <Router>
            <Switch>
                <Route path = '/nasa'>
                    <NasaComponent/>
                    
                </Route>
                <Route path = '/counter'>
                    <Component1 />

                </Route>

            </Switch>
          </Router>
      </header>
    </div>
  );
}

export default App;
