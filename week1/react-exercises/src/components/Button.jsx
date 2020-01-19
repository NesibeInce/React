import React from 'react';

function Button({ addOne }) {
  return (
    <div>
      <button onClick={addOne}>Add 1</button>
    </div>
  );
}

export default Button;
