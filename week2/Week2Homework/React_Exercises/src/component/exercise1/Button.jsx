import React from 'react';

const Button = ({ getFriend }) => (
  <button style={{ margin: '3%' }} onClick={() => getFriend()}>
    Get a Friend!
  </button>
);

export default Button;
