import React, { Fragment } from 'react';
import poweredBy from './powered-by.png';

export default function Help() {
  return (
    <Fragment>
      <dl>
        <dt>help</dt>
        <dd>show help</dd>
        <dt>{'/giphy [tag]'}</dt>
        <dd>
          <span>render a random gif based on provided tag</span>
          <img
            src={poweredBy}
            alt='Powered by Giphy'
            className='powered-by'
          />
        </dd>
        <dt>clear (or cmd+k)</dt>
        <dd>clear the console</dd>
        <dt>Say [words to say]</dt>
        <dd>Use the Web Audio API to speak the provided text</dd>
      </dl>
      <p>...plus many more 'hidden' commands!</p>
    </Fragment>
  );
}
