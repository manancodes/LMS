import React, { useState, useEffect } from "react";
import Topic from "./Topic/Topic";
import CustomDropDown from "./DropDown/CustomDropDown";
import Topics from "../../data/Topics";

const SideMenu = (props) => {
  const [category, setcategory] = useState("HTML");
  const [ActiveTopics, setTopics] = useState(Topics);

  useEffect(() => {
    var activetopics = Topics.filter((topic) => {
      return topic.module === category;
    });
    setTopics(activetopics);
  }, [category]);

  var changeCategory = (selected) => {
    setcategory(selected);
  };

  return (
    <div className={props.open ? "menu menu-open" : "menu"}>
      <div>
        <br />
        <br />
        <CustomDropDown category={category} click={changeCategory} />
        <div className="topics">
          {ActiveTopics.map((name, i) => (
            <Topic
              key={name.id}
              id={name.id}
              number={i + 1}
              title={name.name}
            ></Topic>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SideMenu;
