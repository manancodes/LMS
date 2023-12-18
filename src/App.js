import React from "react";
import Routes from "./Routes";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="unnav">
        <Routes />
      </div>
    </BrowserRouter>
  );
};

export default App;
