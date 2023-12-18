import React, { Component } from "react";
import Editor from "../../Components/Editor/Editor";
import Material from "../../Components/Material/Material";
import SideMenu from "../../Components/SideMenu/SideMenu";
import SideMenuBtn from "../../Components/FloatingButtons/SideMenuBtn";
import EditorBtn from "../../Components/FloatingButtons/EditorBtn";

class Learning extends Component {
  constructor() {
    super();
    this.state = {
      editorOpen: false,
      menuOpen: true,
    };
  }

  editorHandler = () => {
    this.setState({ editorOpen: !this.state.editorOpen });
  };

  sideMenuHandler = () => {
    this.setState({ menuOpen: !this.state.menuOpen });
  };

  render() {
    return (
      <div className="parent">
        <div className="canvas">
          <SideMenu open={this.state.menuOpen}></SideMenu>
          <Material open={this.state.editorOpen}></Material>
          <Editor open={this.state.editorOpen}></Editor>
        </div>
        <SideMenuBtn click={this.sideMenuHandler} open={this.state.menuOpen} />
        <EditorBtn click={this.editorHandler} open={this.state.editorOpen} />
      </div>
    );
  }
}

export default Learning;
