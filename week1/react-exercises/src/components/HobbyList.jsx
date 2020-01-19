import React from 'react';
import Hobbies from './Hobbies';

function HobbyList() {
  const hobbies = ['Surfing', 'Rock climbing', 'Mountain biking', 'Breakdancing'];
  return hobbies.map((elem, index) => <Hobbies hobbies={elem} key={index} />);
}
export default HobbyList;
