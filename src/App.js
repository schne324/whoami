import React from 'react';
import Handle from './Handle';
import Terminal from './Terminal';
import me from './cropped-me.png';
import './App.css';

export default function App() {
  return (
    <main>
      <div className='who'>
        <h1><img alt='Harris Schneiderman' src={me} /></h1>
      </div>
      <div className='window'>
        <Handle />
        <Terminal />
      </div>
    </main>
  );
};
