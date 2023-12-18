import React from "react";

const Challenge = (props) => {
  return (
    <>
      <div className="sbox">
        <h5 className="heading">{props.head}</h5>
        <p>{props.text}</p>
        <span className={props.difficulty}>{props.difficulty}</span>
      </div>
    </>
  );
};

export default Challenge;
