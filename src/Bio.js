import React from 'react';
import './Bio.css';

export default function Bio() {
  return (
    <div className='bio'>
      <h2>harris</h2>
      <p>Hey, I am Harris and I am a web developer. I currently live in sunny San Diego, CA but originally come from East Lansing, Michigan (go state!).</p>
      <h3>Stuff I do with my free time:</h3>
      <ul>
        <li>listening / making / witnessing music</li>
        <li>making open source software</li>
        <li>learning</li>
        <li>kayaking</li>
        <li>fishing</li>
        <li>soccer</li>
        <li>taking my dog to the beach</li>
        <li>beer</li>
        <li>cooking</li>
      </ul>
      <h3>Links and things</h3>
      <ul className='links'>
        <li>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://www.harris-schneiderman.com'
          >
            portfolio
          </a>
        </li>
        <li>
          <a
            target='_blank'
            href='https://github.com/schne324'
            rel='noopener noreferrer'
          >
            github
          </a>
        </li>
        <li>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://twitter.com/theHarrisius'
          >
            twitter
          </a>
        </li>
        <li>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='mailto:me@harris-schneiderman.com'
          >
            me@harris-schneiderman.com
          </a>
        </li>
      </ul>
    </div>
  )
}
