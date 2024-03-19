import React, { useState } from "react";
import account_image from "../Avatar/account.png";

import "./BookingModal.css";

const BookingModal = (props) => {
  const [name, setname] = useState("");
  const [phone, setphone] = useState("");
  const [email, setemail] = useState("");
  const [unfilled, setunfilled] = useState(false);

  const submitHandler = () => {
    if (name === "" && phone === "") setunfilled(true);
    else props.closeModal();
  };

  return (
    <div className="modal">
      <div className="form mt-5 ">
        <div className="modal-head text-center font-weight-bold">
          <img
            className="modal-img"
            alt="profile"
            src={props.image ? props.image : account_image}
            width={296}
            height={250}
          ></img>
        </div>
        <div className="modal-body">
          <div className="w-100 d-flex flex-column ml-3">
            <span className="required mb-1 text-dark">Name</span>
            <input
              className="input-field "
              type="text"
              name="name"
              onChange={(e) => {
                setname(e.target.value);
              }}
            ></input>
          </div>
          <div className="w-100 d-flex flex-column ml-3 mt-2">
            <span className="required mb-1 text-dark">Contact Number</span>
            <input
              className="input-field "
              type="text"
              name="number"
              onChange={(e) => {
                setphone(e.target.value);
              }}
            ></input>
          </div>
          <div className="w-100 d-flex flex-column ml-3 mt-2">
            <span className="mb-1 text-dark">Email Id</span>
            <input
              className="input-field "
              type="email"
              name="email"
              onChange={(e) => {
                setemail(e.target.value);
              }}
            ></input>
          </div>
        </div>
        {unfilled ? (
          <div className="alert-text text-center m-0">
            Please fill essential details !
          </div>
        ) : null}
        <button className="submit-btn p-1 mt-2" onClick={submitHandler}>
          Submit
        </button>
      </div>
    </div>
  );
};

export default BookingModal;
