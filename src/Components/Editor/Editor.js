import React from "react";

const editor = (props) => {
  return (
    <div
      className={
        props.open === true ? "editor-main editor-main-open" : "editor-main"
      }
    >
      <iframe
        src="https://codesandbox.io/embed/friendly-zhukovsky-qsn4v?fontsize=14&hidenavigation=1&theme=dark"
        className="xyz"
        title="friendly-zhukovsky-qsn4v"
        allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
        sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
      ></iframe>
    </div>
  );
};

export default editor;
