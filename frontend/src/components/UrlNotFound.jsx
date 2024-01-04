import React from "react";
import gif from '../images/404_loop_4by3.gif'

function Error() {
  return <div className="bg-dark w-100">
    <img src={gif} className="w-100"/>
  </div>;
}

export default Error;
