import axios from 'axios';
import React, { useState, useEffect } from 'react';

const SearchGif = (props) =>{
    const [gifList, setGifList] = useState([]);

    useEffect((props)=>{
        async function fetchSearchedGif(){
            try{
                const list = await axios.get(`http://api.giphy.com/v1/gifs/search?q=sushi&api_key=qFb2hJrxjWy2Ezfe5hkxMyK3nk7nL2DR`);
                setGifList(list.data.data)
            }catch(error){
                console.log(error);
            }
        }
        fetchSearchedGif();
    },[]);
  return (
    <div className="SearchGif">
        {console.log(gifList)};
    </div>
  )
}

export default SearchGif;
