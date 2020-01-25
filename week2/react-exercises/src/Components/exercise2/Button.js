import React from 'react';

function Button({ getDogPhoto }) {
  return (
    <div>
      <button className="button" onClick={getDogPhoto}>
        Get a Dog!
      </button>
    </div>
  );
}

export default Button;
