import React from "react";
import { Link as NavLink } from "react-router-dom";

const Topic = (props) => {
  const setID = () => {
    localStorage.setItem("topicID", props.id);
  };
  return (
    <div onClick={setID}>
      <NavLink
        className="topic"
        activeClassName="topicActive"
        to={`/learning/${props.id}`}
      >
        <>
          <span>{props.number}</span>
          <span>{props.title}</span>
        </>
      </NavLink>
    </div>
  );
};

export default Topic;
