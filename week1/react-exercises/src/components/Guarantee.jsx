import React from 'react';

function Guarantee(props) {
  return (
    <div className = "guarantee">
      <img src={props.image} alt={props.alt} />
      <h3>{props.title}</h3>
      <p>{props.details}</p>
    </div>
  );
}

export default Guarantee;
