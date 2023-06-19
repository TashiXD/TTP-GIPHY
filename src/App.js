import React, {useState} from 'react';
import './App.css';
import { Topbar, TrendingGif, SearchGif, RandomGif, LoadGif} from './components';
//Loads in our landing page
function App() {
  const[searchTerm, setSearchTerm] = useState("");
  const[loadedGif, setLoadedGif] = useState(<TrendingGif />)
  const[isloaded, setIsLoaded] = useState(false);
const handleSearchChange = (event)=>{
  setSearchTerm(event.target.value);
}
  const handleSearchGif =()=>{
    if (searchTerm.trim() !== "") {
      alert(searchTerm);
      return <SearchGif search={searchTerm} />;
    }
    return alert('Enter something to search gif');
  }

  const handleRandomSearch = () =>{
    setLoadedGif(<RandomGif />)
  }

  return (
    <div className="topBar">
      <h1>Gif Finder</h1>
      <div className="search">
        <input type="text" placeholder="search for gif" name="search" value={searchTerm} onChange={handleSearchChange}></input>
        <button className="button" onClick={handleSearchGif}>Search</button>
        <button className="button" onClick={handleRandomSearch}>Random</button>
      </div>
      <div className="main">
        {!isloaded ? <TrendingGif/> : {loadedGif}}
      </div>
      
    </div>
  );
};

export default App;
