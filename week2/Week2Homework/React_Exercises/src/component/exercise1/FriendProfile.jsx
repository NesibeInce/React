import React from 'react';

const FriendProfile = ({ friend }) => {
  const { name, location, email, cell } = friend;
  return (
    <ul style={{ listStyle: 'none', padding: '3%' }}>
      <li>{name && `${name.first} ${name.last}`}</li>
      <li>{location && location.postcode}</li>
      <li>{location && `${location.street.name} ${location.street.number}`}</li>
      <li>{location && location.country}</li>
      <li>{email && email}</li>
      <li>{cell && cell}</li>
    </ul>
  );
};
export default FriendProfile;
