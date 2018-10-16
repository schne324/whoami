import React from 'react';
import PropTypes from 'prop-types';

export default function CommandLine({ path, children }) {
  return (
    <div className='cli'>
      <div aria-hidden='true' className='prompt'>➜</div>
      <div aria-hidden='true' className='path'>{path}</div>
      {children}
    </div>
  );
}

CommandLine.propTypes = {
  path: PropTypes.string.isRequired,
  children: PropTypes.node
};
