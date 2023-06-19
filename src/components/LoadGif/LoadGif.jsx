import React, { useState,useEffect } from "react";
import "./loadgif.css";

/**
 * The LoadGif component loads in the list of gif that is passed from
 * either the TrendingGif or the SearchGif componements with the information
 * about the gif
 */
const LoadGif = ({data}) => {
  const [gifList, setGifList] = useState([]);

  useEffect(() => {
    setGifList(data);
  }, []);

  return (
    <div className="loadGif">
      {gifList.map((gif) => {
        return (
          <div key={gif.id} className="gif">
            <img src={gif.images.downsized.url} />
          </div>
        );
      })}
    </div>
  );
};

export default LoadGif;