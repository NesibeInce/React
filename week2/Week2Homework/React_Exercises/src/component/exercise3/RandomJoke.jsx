import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Joke from './Joke';

const RandomJoke = () => {
  const [joke, setJoke] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios('https://official-joke-api.appspot.com/random_joke');
        setJoke(result);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return <Joke key={joke} joke={joke} />;
};

export default RandomJoke;
