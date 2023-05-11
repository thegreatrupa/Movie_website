import React, { useState } from "react";

import "./Screen2.css";

import Image2 from "../Avatar/Image1.jpg";
import FormModal from "../Modal/FormModal";

const Screen2 = () => {
  const [modal, setmodal] = useState(false);

  const closeModal = () => {
    setmodal(false);
  };

  return (
    <div className="screen2 w-100 d-flex flex-column">
      <div className="movie d-flex flex-column mt-3">
        <img className="image" src={Image2} alt="poster"></img>
        <div className="details p-1">
          <h2 className="movie-name font-weight-bold  m-1 ml-lg-2">
            Movie Name
          </h2>
          <h5 className="summary m-1 ml-lg-2 font-weight-light">
            Here summary of the movie will be displayed which is an essential
            part of task given. So it must be implented here.
          </h5>
        </div>
        <button
          className="btn p-1 text-center mt-2"
          onClick={() => {
            setmodal(true);
          }}
        >
          Book Ticket
        </button>
      </div>
      {modal ? <FormModal closeModal={closeModal} /> : null}
    </div>
  );
};

export default Screen2;
