import React from 'react';

function FriendProfile({ friend }) {
  const path = friend.results[0];
  return (
    <div>
      <ul className="friend-details">
        <li>First Name: {path.name.first}</li>
        <li>Last Name: {path.name.last}</li>
        <li>Street: {path.location.street.name}</li>
        <li>Street No: {path.location.street.number}</li>
        <li>Post Code: {path.location.postcode}</li>
        <li>City: {path.location.city}</li>
        <li>Country: {path.location.country}</li>
        <li>Email: {path.email}</li>
        <li>Phone: {path.phone}</li>
      </ul>
    </div>
  );
}

export default FriendProfile;
