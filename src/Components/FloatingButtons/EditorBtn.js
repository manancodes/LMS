import React from "react";
import { ReactComponent as Cross } from "../../assets/Images/cancel.svg";

const EditorBtn = (props) => {
  return (
    <>
      <button className="editorButton btn2" onClick={props.click}>
        {props.open ? <Cross /> : <span className="check">Code Editor</span>}
      </button>
    </>
  );
};

export default EditorBtn;
