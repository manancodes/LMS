import React from "react";
import Challenge from "./Challenge";
import Data from "../../../data/Challenges";

const Challenges = () => {
  return (
    <div className="challenges">
      {Data.map((item) => {
        return (
          <Challenge
            key={item.id}
            head={item.heading}
            text={item.text}
            difficulty={item.difficulty}
          ></Challenge>
        );
      })}
    </div>
  );
};

export default Challenges;
