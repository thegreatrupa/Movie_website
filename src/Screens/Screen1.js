import React, { useEffect, useLayoutEffect, useState } from "react";
import Image1 from "../Avatar/account.png";
import { Link } from "react-router-dom";
import axios from "axios";

import "./Screen1.css";

import Screen2 from "./Screen2.js";

const Screen1 = () => {
  const [data, setdata] = useState();

  const challengeDetailsAPI = async () => {
    const URL = "https://api.tvmaze.com/search/shows?q=all";
    const response = await axios.get(URL);
    setdata(response.data);
  };

  useLayoutEffect(() => {
    challengeDetailsAPI();
  }, []);

  const Movies = (props) => {
      return (
        
        <div className="card ml-1 mr-1 d-flex flex-column justify-content-center align-items center">
          <Link to="/screen2" state={[data,props.i]}>
          <img
            className="image bg-primary"
            src={data ? data[props.i].show.image.medium : Image1}
            alt="All American"
          ></img></Link>
          <div className="card-details d-flex flex-column">
            <span className="font-weight-bold ml-2">
              {data ? data[props.i].show.name : "Movie Name"}
            </span>
            <span className="genre text-muted ml-2">
              {data ? data[props.i].show.genres[0] : null}
            </span>
            <div className="language-rating mb-2">
              <span className="language ml-2">
                {data ? data[props.i].show.language : "Language"}
              </span>
              <span className="rating font-weight-light ml-2 mr-1 ">
                {data ? data[props.i].show.rating.average : null} rated
              </span>
            </div>
          </div>
        </div>
      );
    
  };

  // const Cards = () => {
  //   for(var i=0; i<5; i++){
  //     <Movies i = {i}/>
  //   }
  // }

  return (
    <div className="screen1 w-100 d-flex flex-column">
      <div className="text-center">
        <span className="title mt-3">Movies</span>
      </div>
      <div className="contents d-flex p-1">
        {<Movies i={0} />}
        {<Movies i={1} />}
        {<Movies i={2} />}
        {<Movies i={3} />}
        {<Movies i={4} />}
        {<Movies i={8} />}
        {<Movies i={6} />}
        {<Movies i={7} />}
        {<Movies i={9} />}

      </div>
    </div>
  );
};

export default Screen1;
