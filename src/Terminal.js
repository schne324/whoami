import React from 'react';
import './Terminal.css';

export default function Terminal() {
  const d = new Date();
  const secs = `${d.getSeconds()}`;
  const time = `${d.getHours()}:${d.getMinutes()}:${secs.length === 1 ? `0${secs}` : secs}`;

  return (
    <div className='terminal'>
      <div>
        {`Last login: ${d.toDateString()} ${time} on console`}
      </div>
      <div className='cli'>
        <div className='prompt'>➜</div>
        <div className='path'>~</div>
      </div>
    </div>
  );
}
