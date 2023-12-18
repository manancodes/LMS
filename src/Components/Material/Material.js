import React, { useState, useEffect } from "react";
import CodeAlong from "./CodeAlong/CodeAlong";
import Challenges from "./Challenges/Challenges";
import { Link as NavLink, useLocation } from "react-router-dom";
import Topics from "../../data/Topics";

const Material = (props) => {
  const [activeTab, setActiveTab] = useState(1);
  const location = useLocation();
  var activeID = localStorage.getItem("topicID");
  var activeTopic = Topics.find((item) => item.id === activeID);

  useEffect(() => {
    activeID = localStorage.getItem("topicID");
    activeTopic = Topics.find((item) => item.id === activeID);
  }, [location]);

  return (
    <div className="Material">
      <div className="bar">
        <div className="f1 tab tab1">{activeTopic?.name}</div>
        <div className="box">
          <NavLink
            activeClassName="linkactivetab"
            className="linktab"
            to={"/learning/code-along"}
          >
            <button
              className={activeTab === 2 ? "f2 tab activetab" : "f2 tab"}
              onClick={() => {
                setActiveTab(1);
              }}
            >
              Code-Along
            </button>
          </NavLink>
        </div>
        <div className="box">
          <button
            className={activeTab === 2 ? "f2 tab activetab" : "f2 tab"}
            onClick={() => {
              setActiveTab(2);
            }}
          >
            Challenges
          </button>
        </div>
        {/* <div className="box">
          <button
            className="f2 ntab tab"
            onClick={() => {
              setActiveTab(3);
            }}
          >
            Code Editor
          </button>
        </div> */}
      </div>

      {activeTab === 1 && <CodeAlong />}
      {activeTab === 2 && <Challenges />}
    </div>
  );
};

export default Material;
