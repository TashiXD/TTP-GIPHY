import React, { useState } from "react";
import Button from "../Button/Button";
import SearchGif from "../SearchGif/SearchGif";
import "./topbar.css";
/**
 * This component creates a top bar with:
 * - website Name
 * - input
 * - two buttons : search and a random button
 */
const Topbar = () => {
const[searchTerm, setSearchTerm] = useState("");

const handleSearchChange = (event)=>{
  setSearchTerm(event.target.value);
}
  const handleSearchGif =()=>{
    <SearchGif searchTerm={searchTerm}/>
  }

  return (
    <div className="topBar">
      <h1>Gif Finder</h1>
      <div className="search">
        <input type="text" id="searchTerm" placeholder="search for gif" name="search" onChange={handleSearchChange}></input>
        <button className="button" onClick={handleSearchGif}>Search</button>
        <button className="button">Random</button>
      </div>
    </div>
  );
};

export default Topbar;
