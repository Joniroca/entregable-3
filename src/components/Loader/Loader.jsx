import React from "react";
import "./Loader.css";

const Loader = () => {
  //   return <span calssnameName="loader"></span>;
  return (
    <div calssname="pyramid-loader">
      <div calssname="wrapper">
        <span calssname="side side1"></span>
        <span calssname="side side2"></span>
        <span calssname="side side3"></span>
        <span calssname="side side4"></span>
        <span calssname="shadow"></span>
      </div>
    </div>
  );
};

export default Loader;
