import React, { useState, useEffect } from 'react';
import Joke from './Joke';

function RandomJoke() {
  const [joke, setJoke] = useState({});
  const [isLoading, setLoading] = useState(true);
  const [hasError, setError] = useState(false);
  useEffect(() => {
    fetch(`https://official-joke-api.appspot.com/random_joke`)
      .then(res => res.json())
      .then(data => {
        setJoke(data);
        setLoading(false);
      })
      .catch(err => {
        console.log(err);
        setError(true);
        setLoading(false);
      });
  }, []);

  if (isLoading) {
    return <p>Loading a Jok ...</p>;
  }
  if (hasError) {
    return <p>Something went wrong</p>;
  }
  if (joke) {
    return (
      <div className="joke">
        <Joke joke={joke} />
      </div>
    );
  }
}

export default RandomJoke;
