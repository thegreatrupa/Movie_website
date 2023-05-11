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

  //console.log(data);

  return (
    <div className="w-100 d-flex flex-column">
      <div className="title">
        <h1 className="text-center mt-3">Movies</h1>
      </div>
      <div className="contents d-flex p-1">
        <div className="card ml-1 mr-1 d-flex flex-column justify-content-center align-items center">
          <img
            className="image bg-primary"
            src={data ? data[0].show.image.medium : Image1}
            alt="All American"
          ></img>
          <div className="card-details d-flex flex-column">
            <span className="font-weight-bold ml-2">{data ? data[0].show.name : "Movie Name"}</span>
            <span className="genre text-muted ml-2">{}</span>
            <div className="language-rating mb-2">
              <span className="language ml-2">{data ? data[0].show.language : "Language"}</span>
              <span className="rating font-weight-light ml-2 mr-1 ">
              {data ? data[0].show.rating.average : null} rated
              </span>
            </div>
          </div>
          <Link to="/screen2">
            <button className="summary-btn mb-1 ml-2 w-50" >Details</button>
          </Link>
        </div>

        <div className="card ml-1 mr-1 d-flex flex-column justify-content-center align-items center">
          <img
            className="image bg-primary"
            src={data ? data[1].show.image.medium : Image1}
            alt="All American"
          ></img>
          <div className="card-details d-flex flex-column">
            <span className="font-weight-bold ml-2">{data ? data[1].show.name : "Movie Name"}</span>
            <span className="genre text-muted ml-2">{}</span>
            <div className="language-rating mb-2">
              <span className="language ml-2">{data ? data[1].show.language : "Language"}</span>
              <span className="rating font-weight-light ml-2 mr-1 ">
              {data ? data[1].show.rating.average : null} rated
              </span>
            </div>
          </div>
          <Link to="/screen2">
            <button className="summary-btn mb-1 ml-2 w-50">Details</button>
          </Link>
        </div>

        <div className="card ml-1 mr-1 d-flex flex-column justify-content-center align-items center">
          <img
            className="image bg-primary"
            src={data ? data[2].show.image.medium : Image1}
            alt="All American"
          ></img>
          <div className="card-details d-flex flex-column">
            <span className="font-weight-bold ml-2">{data ? data[2].show.name : "Movie Name"}</span>
            <span className="genre text-muted ml-2">{}</span>
            <div className="language-rating mb-2">
              <span className="language ml-2">{data ? data[2].show.language : "Language"}</span>
              <span className="rating font-weight-light ml-2 mr-1 ">
              {data ? data[2].show.rating.average : null} rated
              </span>
            </div>
          </div>
          <Link to="/screen2">
            <button className="summary-btn mb-1 ml-2 w-50">Details</button>
          </Link>
        </div>

        <div className="card ml-1 mr-1 d-flex flex-column justify-content-center align-items center">
          <img
            className="image bg-primary"
            src={data ? data[3].show.image.medium : Image1}
            alt="All American"
          ></img>
          <div className="card-details d-flex flex-column">
            <span className="font-weight-bold ml-2">{data ? data[3].show.name : "Movie Name"}</span>
            <span className="genre text-muted ml-2">{}</span>
            <div className="language-rating mb-2">
              <span className="language ml-2">{data ? data[3].show.language : "Language"}</span>
              <span className="rating font-weight-light ml-2 mr-1 ">
              {data ? data[3].show.rating.average : null} rated
              </span>
            </div>
          </div>
          <Link to="/screen2">
            <button className="summary-btn mb-1 ml-2 w-50">Details</button>
          </Link>
        </div>

        <div className="card ml-1 mr-1 d-flex flex-column justify-content-center align-items center">
          <img
            className="image bg-primary"
            src={data ? data[8].show.image.medium : Image1}
            alt="All American"
          ></img>
          <div className="card-details d-flex flex-column">
            <span className="font-weight-bold ml-2">{data ? data[8].show.name : "Movie Name"}</span>
            <span className="genre text-muted ml-2">{}</span>
            <div className="language-rating mb-2">
              <span className="language ml-2">{data ? data[8].show.language : "Language"}</span>
              <span className="rating font-weight-light ml-2 mr-1 ">
              {data ? data[8].show.rating.average : null} rated
              </span>
            </div>
          </div>
          <Link to="/screen2">
            <button className="summary-btn mb-1 ml-2 w-50">Details</button>
          </Link>
        </div>

        <div className="card ml-1 mr-1 d-flex flex-column justify-content-center align-items center">
          <img
            className="image bg-primary"
            src={data ? data[6].show.image.medium : Image1}
            alt="All American"
          ></img>
          <div className="card-details d-flex flex-column">
            <span className="font-weight-bold ml-2">{data ? data[6].show.name : "Movie Name"}</span>
            <span className="genre text-muted ml-2">{}</span>
            <div className="language-rating mb-2">
              <span className="language ml-2">{data ? data[6].show.language : "Language"}</span>
              <span className="rating font-weight-light ml-2 mr-1 ">
              {data ? data[6].show.rating.average : null} rated
              </span>
            </div>
          </div>
          <Link to="/screen2">
            <button className="summary-btn mb-1 ml-2 w-50">Details</button>
          </Link>
        </div>

        <div className="card ml-1 mr-1 d-flex flex-column justify-content-center align-items center">
          <img
            className="image bg-primary"
            src={data ? data[7].show.image.medium : Image1}
            alt="All American"
          ></img>
          <div className="card-details d-flex flex-column">
            <span className="font-weight-bold ml-2">{data ? data[7].show.name : "Movie Name"}</span>
            <span className="genre text-muted ml-2">{}</span>
            <div className="language-rating mb-2">
              <span className="language ml-2">{data ? data[7].show.language : "Language"}</span>
              <span className="rating font-weight-light ml-2 mr-1 ">
              {data ? data[7].show.rating.average : null} rated
              </span>
            </div>
          </div>
          <Link to="/screen2">
            <button className="summary-btn mb-1 ml-2 w-50">Details</button>
          </Link>
        </div>


      </div>
    </div>
  );
};

export default Screen1;
