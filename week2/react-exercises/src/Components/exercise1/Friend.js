import React, { useState, useEffect } from 'react';
import Button from './Button';

import FriendProfile from './FriendProfile';

function Friend() {
  const [friend, setFriend] = useState(null);
  const [isLoading, setLoading] = useState(true);
  const [hasError, setError] = useState(false);

  function getFriend() {
    setLoading(true);
    fetch('https://www.randomuser.me/api?results=1')
      .then(res => res.json())
      .then(data => {
        setFriend(data);
        setLoading(false);
      })
      .catch(err => {
        console.log(err);
        setError(true);
        setLoading(false);
      });
  }
  useEffect(() => getFriend(), []);
  if (isLoading) {
    return <p>Loading the information for friend ...</p>;
  }
  if (hasError) {
    return <p>Something went wrong</p>;
  }
  if (friend) {
    return (
      <div className="friend">
        <Button getFriend={getFriend} />
        <FriendProfile friend={friend} />
      </div>
    );
  }
}

export default Friend;
