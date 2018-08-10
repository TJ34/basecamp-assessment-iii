import React, { Component } from 'react';
import './App.css';
import Button from './Button';
import Hello from './Hello';
import Sentence from './Sentence';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="Push">
          <Button/>
        </div>
        <Hello name="DevMtn"/>
        <div className="Ready">
        <Sentence />
        </div>
      </div>
    );
  }
}





export default App;