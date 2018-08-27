import React, { Component, Fragment } from 'react';
import Typed from 'typed.js';
import Bio from './Bio';
import './Terminal.css';

export default class Terminal extends Component {
  state = { showBio: false }
  componentDidMount() {
    setTimeout(() => {
      this.typed = new Typed(this.typedTarget, {
        strings: ['whoami'],
        typeSpeed: 100,
        onComplete: () => {
          setTimeout(() => this.setState({ showBio: true }), 750);
        }
      });
    }, 500);
  }

  componentWillUnmount() {
    this.typed.destroy();
  }

  render() {
    const { showBio } = this.state;
    const d = new Date();
    const hours = d.getHours();
    const mins = d.getMinutes();
    const secs = `${d.getSeconds()}`;
    const time = `${hours}:${mins}:${secs.length === 1 ? `0${secs}` : secs}`;

    return (
      <div className={`terminal ${showBio ? 'hide-cursor' : ''}`}>
        <div>
          {`Last login: ${d.toDateString()} ${time} on console`}
        </div>
        <div className='cli'>
          <div className='prompt'>➜</div>
          <div className='path'>~</div>
          <div ref={el => this.typedTarget = el} />
        </div>
        {showBio && (
          <Fragment>
            <Bio />
            <div className='cli'>
              <div className='prompt'>➜</div>
              <div className='path'>~</div>
            </div>
          </Fragment>
        )}
      </div>
    );
  }
}
