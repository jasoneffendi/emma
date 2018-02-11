import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import annyang from 'annyang'

class App extends Component {
  render() {
    if(annyang) {
      console.log('Hi annyang')
      annyang.debug();
      var commands = {
        'hello world': function () { alert('Hello'); }
      };
      // Add our commands to annyang
      annyang.addCommands(commands);

      annyang.addCallback('soundstart', function () {
        console.log('sound detected');
      });

      annyang.addCallback('result', function () {
        console.log('sound stopped');
      });
      // Start listening.
      annyang.start();
    }
    return (
      <div className="App">
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <h1 className="App-title">Hi! I'm Emma</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
