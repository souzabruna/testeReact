import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Inicio  from './comp.js'
import Principal  from './principal.js'

class App extends Component {
     constructor(props){
        super();
        this.state = {
          principal: true,
          inicio: false,
          service: false
        }
    }

  render() {
    return (
      <div className="App">
        {this.state.inicio ? < Inicio /> : null}
        {this.state.principal ? < Principal /> : null}
      </div>
    );
  }
}

export default App;
