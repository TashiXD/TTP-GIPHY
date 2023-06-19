import axios from 'axios';
import React, { useState, useEffect } from 'react';
import LoadGif from '../LoadGif/LoadGif';

/**
 * This component looks up the search term and fetchs the 
 * list of gif based on the search term and passes the list of gif
 * to load gif component
 */
const SearchGif = (props) =>{
    const [gifList, setGifList] = useState([]);
    useEffect(()=>{
        async function fetchSearchedGif(){
            console.log("prop Name:" ,props.search);
            try{
                const list = await axios.get(`http://api.giphy.com/v1/gifs/search?q=${props.search}&api_key=qFb2hJrxjWy2Ezfe5hkxMyK3nk7nL2DR`);
                setGifList(list.data.data)
            }catch(error){
                console.log(error);
            }
        }
        fetchSearchedGif();
    },[props.search]);
    console.log(gifList);

  return (
    <div className="SearchGif">
       <LoadGif data={gifList} />
    </div>
  )
}

export default SearchGif;
