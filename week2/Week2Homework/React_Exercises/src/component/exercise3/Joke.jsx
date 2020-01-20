import React from 'react';

export default function Joke({ joke }) {
  const { data } = joke;
  return (
    <div style={{ background: 'cornflowerblue', padding: '3%' }}>
      <p>{data && data.setup}</p>
      <p>{data && data.punchline}</p>
    </div>
  );
}
