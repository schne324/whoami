import React, { Component } from 'react';
import Handle from './Handle';
import Terminal from './Terminal';
import './App.css';

class App extends Component {
  render() {
    return (
      <main>
        <div className='window'>
          <Handle />
          <Terminal />
        </div>
      </main>
    );
  }
}

export default App;
