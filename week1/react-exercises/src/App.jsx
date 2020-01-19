import React from 'react';
import logo from './logo.svg';
import Hobbies from './components/HobbyList';
import Guarantee from './components/Guarantee';
import delivery from './img/f-delivery.png';
import coin from './img/coin.png';
import chat from './img/chat.png';
import Counter from './components/Counter';

import './App.css';

function App() {
  return (
    <div className="App">
      <Hobbies />
      <div className="content">
        <Guarantee
          image={delivery}
          alt="shipping"
          title="Free Shipping"
          details="Fusce urna quam, euismod sit amet mollis quis, vestibulum quis velit. Vestibulum mal esuada aliquet libero viverra cursus. "
        />
        <Guarantee
          image={coin}
          alt="Money Back"
          title="100% Money Back"
          details="Urna quam, euismod sit amet mollis quis, vestibulum quis velit. Vestibulum mal esuada aliquet libero viverra cursus. "
        />
        <Guarantee
          image={chat}
          alt="Online Suppport"
          title="Online Support 24/7"
          details="Urna quam, euismod sit amet mollis quis, vestibulum quis velit. Vestibulum mal esuada aliquet libero viverra cursus. "
        />
      </div>
      <Counter />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code> src / App.js </code> and save to reload.{' '}
        </p>{' '}
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React{' '}
        </a>{' '}
      </header>{' '}
    </div>
  );
}

export default App;
