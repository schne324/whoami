import React from 'react';
import './Handle.css';

export default function Handle() {
  return (
    <div className='handle'>
      <div className='buttons'>
        <div className='close' />
        <div className='minimize' />
        <div className='maximize' />
      </div>
      <span className='title'>harris@mpb: ~ (zsh)</span>
    </div>
  );
}
