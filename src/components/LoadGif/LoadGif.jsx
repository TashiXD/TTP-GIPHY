import React from "react";
import "./loadgif.css";

/**
 * The LoadGif component loads in the list of gif that is passed from
 * either the TrendingGif or the SearchGif componements with the information
 * about the gif
 */
const LoadGif = (props) => {
  return (
    <div className="loadGif">
      {props.data.map((gif) => {
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