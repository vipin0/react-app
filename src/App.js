import React, { Component } from 'react';
import { Button } from "mdbreact";
import logo from './logo.png';
import ModelApp from './components/ModelApp'
import Header from './components/Header';
class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <ModelApp/>
      </div>
    );
  }
}

export default App;