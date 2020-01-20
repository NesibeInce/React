import React from 'react';
import './App.css';

// components
import Friend from './component/exercise1/Friend';
import RandomJoke from './component/exercise3/RandomJoke';
import DogGallery from './component/exercise2/DogGallery';

const App = () => {
  return (
    <div className='App'>
      <Friend />
      <DogGallery />
      <RandomJoke />
    </div>
  );
};

export default App;
