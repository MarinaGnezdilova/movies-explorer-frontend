import React from "react";
import { Link } from "react-router-dom";

function Navigation(props) {
  return (
    <div className="Navigation">
       {props.children}
      </div>
  )}

export default Navigation;