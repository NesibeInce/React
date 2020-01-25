import React from 'react';
import Friend from './Components/exercise1/Friend';
import DogGallery from './Components/exercise2/DogGallery';
import RandomJoke from './Components/exercise3/RandomJoke';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Friend />
        <DogGallery />
        <RandomJoke />
      </header>
    </div>
  );
}

export default App;
