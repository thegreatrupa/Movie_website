import React, { useState, useLayoutEffect } from "react";
import axios from "axios";

import "./Screen2.css";

import Image2 from "../Avatar/Image1.jpg";
import FormModal from "../Modal/FormModal";

const Screen2 = () => {
  const [name,setname] = useState("");
  const [modal, setmodal] = useState(false);
  const [data, setdata] = useState();

  const challengeDetailsAPI = async () => {
    const URL = "https://api.tvmaze.com/search/shows?q=all";
    const response = await axios.get(URL);
    setdata(response.data);
  };

  useLayoutEffect(() => {
    challengeDetailsAPI();
  }, []);

  console.log(data);

  const closeModal = () => {
    setmodal(false);
  };

  return (
    <div className="screen2 w-100 d-flex flex-column">
      <div className="movie d-flex flex-column mt-3">

        <div>
          <img className="image" src={data ? data[0].show.image.medium : Image2} alt="poster"></img>
          <div className="details p-1">
            <h2 className="movie-name font-weight-bold  m-1 ml-lg-2">
            {data ? data[0].show.name : "Movie Name"}
            </h2>
            <h5 className="summary m-1 ml-lg-2 font-weight-light">
            {data ? data[0].show.summary : "Summary"}
            </h5>
          </div>
          <button
            className="btn p-1 text-center mt-2"
            onClick={() => {
              setmodal(true);
              setname(data ? data[0].show.name : "Movie Name");
            }}
          >
            Book Ticket
          </button>
        </div>

        <div className="mt-2">
          <img className="image" src={data ? data[1].show.image.medium : Image2} alt="poster"></img>
          <div className="details p-1">
            <h2 className="movie-name font-weight-bold  m-1 ml-lg-2">
            {data ? data[1].show.name : "Movie Name"}
            </h2>
            <h5 className="summary m-1 ml-lg-2 font-weight-light">
            {data ? data[1].show.summary : "Summary"}
            </h5>
          </div>
          <button
            className="btn p-1 text-center mt-2"
            onClick={() => {
              setmodal(true);
              setname(data ? data[1].show.name : "Movie Name");
            }}
          >
            Book Ticket
          </button>
        </div>

        <div className="mt-2">
          <img className="image" src={data ? data[2].show.image.medium : Image2} alt="poster"></img>
          <div className="details p-1">
            <h2 className="movie-name font-weight-bold  m-1 ml-lg-2">
            {data ? data[2].show.name : "Movie Name"}
            </h2>
            <h5 className="summary m-1 ml-lg-2 font-weight-light">
            {data ? data[2].show.summary : "Summary"}
            </h5>
          </div>
          <button
            className="btn p-1 text-center mt-2"
            onClick={() => {
              setmodal(true);
              setname(data ? data[2].show.name : "Movie Name");
            }}
          >
            Book Ticket
          </button>
        </div>

        <div className="mt-2">
          <img className="image" src={data ? data[3].show.image.medium : Image2} alt="poster"></img>
          <div className="details p-1">
            <h2 className="movie-name font-weight-bold  m-1 ml-lg-2">
            {data ? data[3].show.name : "Movie Name"}
            </h2>
            <h5 className="summary m-1 ml-lg-2 font-weight-light">
            {data ? data[3].show.summary : "Summary"}
            </h5>
          </div>
          <button
            className="btn p-1 text-center mt-2"
            onClick={() => {
              setmodal(true);
              setname(data ? data[3].show.name : "Movie Name");
            }}
          >
            Book Ticket
          </button>
        </div>

        <div className="mt-2">
          <img className="image" src={data ? data[8].show.image.medium : Image2} alt="poster"></img>
          <div className="details p-1">
            <h2 className="movie-name font-weight-bold  m-1 ml-lg-2">
            {data ? data[8].show.name : "Movie Name"}
            </h2>
            <h5 className="summary m-1 ml-lg-2 font-weight-light">
            {data ? data[8].show.summary : "Summary"}
            </h5>
          </div>
          <button
            className="btn p-1 text-center mt-2"
            onClick={() => {
              setmodal(true);
              setname(data ? data[8].show.name : "Movie Name");
            }}
          >
            Book Ticket
          </button>
        </div>

        <div className="mt-2">
          <img className="image" src={data ? data[5].show.image.medium : Image2} alt="poster"></img>
          <div className="details p-1">
            <h2 className="movie-name font-weight-bold  m-1 ml-lg-2">
            {data ? data[5].show.name : "Movie Name"}
            </h2>
            <h5 className="summary m-1 ml-lg-2 font-weight-light">
            {data ? data[5].show.summary : "Summary"}
            </h5>
          </div>
          <button
            className="btn p-1 text-center mt-2"
            onClick={() => {
              setmodal(true);
              setname(data ? data[5].show.name : "Movie Name");
            }}
          >
            Book Ticket
          </button>
        </div>

        <div className="mt-2">
          <img className="image" src={data ? data[6].show.image.medium : Image2} alt="poster"></img>
          <div className="details p-1">
            <h2 className="movie-name font-weight-bold  m-1 ml-lg-2">
            {data ? data[6].show.name : "Movie Name"}
            </h2>
            <h5 className="summary m-1 ml-lg-2 font-weight-light">
            {data ? data[6].show.summary : "Summary"}
            </h5>
          </div>
          <button
            className="btn p-1 text-center mt-2"
            onClick={() => {
              setmodal(true);
              setname(data ? data[6].show.name : "Movie Name");
            }}
          >
            Book Ticket
          </button>
        </div>

        <div className="mt-2">
          <img className="image" src={data ? data[7].show.image.medium : Image2} alt="poster"></img>
          <div className="details p-1">
            <h2 className="movie-name font-weight-bold  m-1 ml-lg-2">
            {data ? data[7].show.name : "Movie Name"}
            </h2>
            <h5 className="summary m-1 ml-lg-2 font-weight-light">
            {data ? data[7].show.summary : "Summary"}
            </h5>
          </div>
          <button
            className="btn p-1 text-center mt-2"
            onClick={() => {
              setmodal(true);
              setname(data ? data[7].show.name : "Movie Name");
            }}
          >
            Book Ticket
          </button>
        </div>


      </div>
      {modal ? <FormModal closeModal={closeModal} name={name} /> : null}
    </div>
  );
};

export default Screen2;
