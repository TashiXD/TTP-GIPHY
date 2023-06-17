import axios from "axios";
import React, { useEffect, useState } from "react";
import LoadGif from "../LoadGif/LoadGif";
/**
 * The TrendingGif components fetches the trending 50 gifs from the GIPHY API,
 * and using state we set the data we fetch into trendingGif
 * then, we sent the list that we got from using the API to LoadGif component,
 * which will load the gifs into our webpage
 */
const TrendingGif = () => {
  const [trendingGif, setTrendingGif] = useState([]);
  useEffect(() => {
    async function fetchTrendingGif() {
      try {
        const list = await axios.get("https://api.giphy.com/v1/gifs/trending", {
          params: {
            api_key: "qFb2hJrxjWy2Ezfe5hkxMyK3nk7nL2DR",
          },
        });
        setTrendingGif(list.data.data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchTrendingGif();
  }, []);
  return (
    <div>
      <LoadGif data={trendingGif} />
    </div>
  );
};

export default TrendingGif;