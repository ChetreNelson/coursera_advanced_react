import React from "react";

const Card = (props) => {
  return (
    <div>
      <h1>Gift Card Page</h1>
      <h2>
        Customer: {props.firstName} {props.lastName}
      </h2>
      <h3>{props.text}</h3>
      <p>{props.instructions}</p>
    </div>
  );
};

export default Card;
