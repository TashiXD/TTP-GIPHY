import React, { useState } from "react";
import SearchGif from "../SearchGif/SearchGif";
import RandomGif from "../Random/Random";
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
    if (searchTerm.trim() !== "") {
      return <SearchGif search="Tashi" />;
    }
    return alert('Enter something to search gif');
  }

  const handleRandomSearch = () =>{
    return <RandomGif />
  }

  return (
    <div className="topBar">
      <h1>Gif Finder</h1>
      <div className="search">
        <input type="text" placeholder="search for gif" name="search" value={searchTerm} onChange={handleSearchChange}></input>
        <button className="button" onClick={handleSearchGif}>Search</button>
        <button className="button" onClick={handleRandomSearch}>Random</button>
      </div>
    </div>
  );
};

export default Topbar;
