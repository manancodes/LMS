import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import Modules from "../../../data/Modules";

const CustomDropDown = (props) => {
  return (
    <>
      <Dropdown>
        <Dropdown.Toggle variant="dark" id="dropdown-basic">
          {props.category}
        </Dropdown.Toggle>
        <Dropdown.Menu>
          {Modules.map((Module) => {
            return (
              <div
                key={Module}
                onClick={() => {
                  props.click(Module);
                }}
              >
                <Dropdown.Item>{Module}</Dropdown.Item>
              </div>
            );
          })}
        </Dropdown.Menu>
      </Dropdown>
    </>
  );
};

export default CustomDropDown;
