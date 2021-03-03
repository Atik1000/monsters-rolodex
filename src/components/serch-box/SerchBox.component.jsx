import React from "react";
import "./Serch-box.style.css";

const SerchBox = (props) => {
  return (
    <>
      <input
        className="search-box"
        type="serch"
        placeholder="serch monsters"
        onChange={props.onSerchChange}
      />
    </>
  );
};

export default SerchBox;
