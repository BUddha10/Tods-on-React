import React from "react";
import "./SingleList.css";

function SingleList({ toAdd }) {
  return (
    <div className="singleList">
      <h3>{toAdd}</h3>
    </div>
  );
}

export default SingleList;
