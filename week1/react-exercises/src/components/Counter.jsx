import React, { useState } from 'react';
import Count from './Count';
import Button from './Button';

function Counter() {
  const [count, setCount] = useState(0);
  const increaseOne = () => {
    setCount(count + 1);
  };
  const feedback = () => {
    if (count > 10) {
      return "It's higher than 10!";
    }
    return 'Keep counting...';
  };
  return (
    <div>
      <h3>{feedback()}</h3>
      <Count count={count} />
      <Button addOne={increaseOne} />
    </div>
  );
}

export default Counter;
