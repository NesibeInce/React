import React, { useState } from 'react';
import FriendProfile from './FriendProfile';
import Button from './Button';

const mainURL = 'https://www.randomuser.me/api?results=1';

const Friend = () => {
  const [friend, setFriend] = useState({});

  // function to fetch the url & to set the friend data
  const getFriend = async () => {
    try {
      const fetchedData = await fetch(mainURL);
      const jsonData = await fetchedData.json();
      await setFriend(jsonData.results[0]);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div style={{ background: 'cornflowerblue' }}>
      <Button getFriend={getFriend} />
      <FriendProfile friend={friend} />
    </div>
  );
};
export default Friend;
