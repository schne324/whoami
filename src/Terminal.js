import React, { Component, Fragment } from 'react';
import Typed from 'typed.js';
import Bio from './Bio';
import CommandLine from './CommandLine';
import Help from './Help';
import './Terminal.css';

const API_URL = 'https://5rfuy2c78j.execute-api.us-east-1.amazonaws.com/dev/random';
const synth = window.speechSynthesis;
const [ voice ] = Array.from(synth.getVoices());

export default class Terminal extends Component {
  state = {
    showBio: false,
    date: new Date(),
    path: '~',
    history: [],
    value: '',
    cleared: false
  }

  async handleCommand() {
    const { value } = this.input;
    const [ cmd, ...rest ] = value.split(' ');

    switch (cmd) {
      case '/giphy':
        const tag = rest.join(' ') || 'bears'
        const res = await fetch(`${API_URL}?term=${encodeURIComponent(tag)}`);

        if (!res.ok) {
          return { output: '/giphy failed, try again?' };
        }

        const { src, alt } = await res.json();
        return {
          output: (
            <img
              alt={alt}
              src={src}
              onLoad={() => this.input.scrollIntoView()}
            />
          )
        };

      case 'help':
        return { output: (<Help />) };
      case 'clear':
        return { clear: true };
      case 'echo':
        return { output: rest.join(' ') };
      case 'cd':
        const output = rest.length
          ? `cd: no such file or directory: ${rest[0]}`
          : 'it looks like you don\'t know how to use the command line...'
        return { output };
      case 'whoami':
        return { output: 'idk' };
      case 'say':
        const utterance = new SpeechSynthesisUtterance(rest.join(' '));
        utterance.voice = voice;
        synth.speak(utterance);
        return { output: '' };
      case '':
        return { output: '\n' };
      default:
        return {
          output: `¯\\_(ツ)_/¯\ncommand not found: "${cmd}"`
        };
    }
  };

  async execute() {
    const { path, history } = this.state;
    const { output, clear } = await this.handleCommand();
    const line = (<CommandLine path={path}>{this.input.value}</CommandLine>);
    const newHistory = clear
      ? []
      : history.concat(line).concat(output)
    const newState = { history: newHistory, value: '' };

    if (clear) {
      newState.showBio = false;
      newState.cleared = true;
    }

    this.setState(newState, () => {
      this.input.scrollIntoView();
    });
  };

  onInputChange = e => this.setState({ value: e.target.value });

  onKeyDown = e => {
    const { which, metaKey } = e;

    if (which === 13) {
      this.execute();
    } else if (which === 75 && metaKey) {
      this.setState({
        showBio: false,
        cleared: true,
        history: []
      });
    }
  };

  componentDidMount() {
    setTimeout(() => {
      this.typed = new Typed(this.typedTarget, {
        strings: ['whoami'],
        typeSpeed: 100,
        onComplete: () => {
          setTimeout(() => {
            this.setState({ showBio: true }, () => {
              this.input.scrollIntoView();
            });
          }, 750);
        }
      });
    }, 500);
  }

  componentWillUnmount() {
    this.typed.destroy();
  }

  render() {
    const { showBio, date, path, cleared } = this.state;
    const hours = date.getHours();
    const mins = date.getMinutes();
    const secs = `${date.getSeconds()}`;
    const time = `${hours}:${mins}:${secs.length === 1 ? `0${secs}` : secs}`;

    return (
      <div
        className={`terminal ${(showBio || cleared) ? 'hide-cursor' : ''}`}
        tabIndex={0}
        aria-label='Scrollable shell'
      >
        {!cleared && (
          <Fragment>
            <div>
              {`Last login: ${date.toDateString()} ${time} on console`}
            </div>
            <CommandLine path='~'>
              <div ref={el => this.typedTarget = el} />
            </CommandLine>
          </Fragment>
        )}
        <Fragment>
          {showBio && (<Bio />)}
          {this.state.history.map((h, i) => (
            <div key={`history-item-${i}`}>{h}</div>
          ))}
          {(showBio || cleared) && (
            <CommandLine path={path}>
              <input
                type='text'
                aria-label='Command prompt'
                onKeyDown={this.onKeyDown}
                ref={el => this.input = el}
                value={this.state.value}
                onChange={this.onInputChange}
              />
            </CommandLine>
          )}
        </Fragment>
      </div>
    );
  }
}
