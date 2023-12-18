import React from "react";
import { ReactComponent as Arrow } from "../../assets/Images/left-arrow.svg";

const SideMenuBtn = (props) => {
  return (
    <div>
      <button className="editorButton btn1" onClick={props.click}>
        {props.open ? (
          <Arrow />
        ) : (
          <span className="changetopic">Change Topic</span>
        )}
      </button>
    </div>
  );
};

export default SideMenuBtn;
