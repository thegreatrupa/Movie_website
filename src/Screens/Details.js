import React, { useState, useLayoutEffect } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";

import "./Details.css";

import Image2 from "../Avatar/Image1.jpg";
import BookingModal from "../Modal/BookingModal";
import Info from "../Avatar/info.png";

const Details = () => {
  const [more, setmore] = useState(false);
  const [modal, setmodal] = useState(false);
  const location = useLocation();
  const data = location.state;

  console.log(data);

  const closeModal = () => {
    setmodal(false);
  };

  return (
    <div className="screen2 w-100 d-flex flex-column">
      <div className="movie d-flex flex-column mt-3 p-2">
        <div className="d-flex flex-column">
          <div className="justify-content-center align-items-center">
            <img
              className="image2"
              src={data ? data[0][data[1]].show.image.medium : Image2}
              alt="poster"
            ></img>
          </div>
          <div className="details mt-3">
            <h5 className="summary font-weight-light">
              {data ? data[0][data[1]].show.summary : "Summary"}
            </h5>
            <div className="streaming">
              {" "}
              Streaming on{" "}
              <b>
                {data ? data[0][data[1]].show.schedule.days[0] : "..."}{" "}
                {data ? data[0][data[1]].show.schedule.time : null}{" "}
              </b>
            </div>
            <div>
              <button
                className="info-btn p-1 text-center mt-2 mr-2"
                onClick={() => {
                  setmore(!more);
                }}
              >
                <img
                  className="mr-1"
                  src={Info}
                  alt=""
                  height={18}
                  width={18}
                />{" "}
                {more ? "Less Info" : "More Info"}
              </button>
            </div>
            {more ? (
              <div className="d-flex flex-column">
                <span className="mt-3 more-text">
                  Language : {data ? data[0][data[1]].show.language : null}{" "}
                </span>
                <span className="mt-3 more-text">
                  Rating : {data ? data[0][data[1]].show.rating.average : null}{" "}
                </span>
                <span className="mt-3 more-text">
                  Type : {data ? data[0][data[1]].show.type : null}{" "}
                </span>
                <span className="mt-3 more-text">
                  Premiered : {data ? data[0][data[1]].show.premiered : null}{" "}
                </span>
                <span className="mt-3 more-text">
                  URL :{" "}
                  <a
                    href={data ? data[0][data[1]].show.url : null}
                    target="_blank"
                  >
                    {data ? data[0][data[1]].show.url : "url"}
                  </a>
                </span>
              </div>
            ) : null}
            <button
              className="info-btn p-1 text-center mt-2"
              onClick={() => {
                setmodal(true);
              }}
            >
              Book Ticket
            </button>
          </div>
        </div>
      </div>
      {modal ? (
        <BookingModal
          closeModal={closeModal}
          name={data ? data[0][data[1]].show.name : null}
          image={data ? data[0][data[1]].show.image.medium : ""}
        />
      ) : null}
    </div>
  );
};

export default Details;
