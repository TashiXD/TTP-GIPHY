import React from "react";
import "./buttonStyle.css";

//this component returns a button with the name that is passed down
const Button = (props) => {
  const handleSearchGif = (searchTerm) => {
    console.log(searchTerm);
  };
  return (
    <div>
      {props.btnName !== "randomBtn" ? (
        <button className="button">{props.btnName}</button>
      ) : <button className="button" onClick={handleSearchGif(props.searchTerm)}>
      {props.btnName}
    </button>}
    </div>
  );
};

export default Button;
