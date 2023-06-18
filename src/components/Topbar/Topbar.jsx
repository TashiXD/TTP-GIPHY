import React from "react";
import Button from "../Button/Button";
import "./topbar.css";
/**
 * This component creates a top bar with:
 * - website Name
 * - input
 * - two buttons : search and a random button
 */
const Topbar = () => {
  return (
    <div className="topBar">
      <h1>Gif search</h1>
      <div className="btn">
        <input placeholder="search for gif"></input>
        <Button btnName="search" />
        <Button btnName="Random" />
      </div>
    </div>
  );
};

export default Topbar;
