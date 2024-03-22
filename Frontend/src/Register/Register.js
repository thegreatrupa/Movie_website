import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
//import { Link } from "react-router-dom";
import axios from "axios";
import "./Register.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { set_username, select_user_email } from "../Redux/reducer";

//import Image from "../Avatar/account.png";

const Register = () => {
  const navigate = useNavigate();

  const [signup, setsignup] = useState(true);
  const [username, setusername] = useState("");
  const [email_id, setemail_id] = useState("");
  const [password, setpassword] = useState("");
  const [unfilled, setunfilled] = useState(false);
  const [match, setmatch] = useState(true);
  const [exist, setexist] = useState(false);
  const dispatch = useDispatch();
  // const user_email_id = useSelector(select_user_email);

  const SubmitHandler = () => {
    // setmatch(true);
    // setexist(false);
    if (signup && (username === "" || password === "" || email_id === "")) {
      setunfilled(true);
    } else if (!signup && (password === "" || email_id === "")) {
      setunfilled(true);
    } else if (!signup) {
      let formData = {
        email: email_id,
        password: password,
      };

      axios({
        url: "http://localhost:3001/match",
        method: "POST",
        data: formData,
      })
        .then((res) => {
          // console.log(res.data);
          if (res.data === 1) {
            alert("success");
            navigate("/");
            dispatch(set_username(email_id));
          } else if (res.data === 0) setmatch(false);
        })
        .catch((err) => {
          console.log(err);
        });
    } else if (signup) {
      let formData = {
        name: username,
        email: email_id,
        password: password,
      };

      axios({
        url: "http://localhost:3001/exist",
        method: "POST",
        data: formData,
      }).then((res) => {
        // console.log(res.data);
        if (res.data === 1) setexist(true);
        else if (res.data === 0) {
          axios({
            url: "http://localhost:3001/register",
            method: "POST",
            data: formData,
          })
            .then((res) => {
              alert("Welcome " + username);
            })
            .catch((err) => {
              console.log("error from frontend " + err);
            });
        }
      });
      navigate("/");
      dispatch(set_username(email_id));
      // console.log(user_email_id);
    }
  };

  return (
    <div className="whole p-2">
      <div className="register w-100 d-flex flex-column p-2">
        <div className="register-head mt-3 mb-3 d-flex flex-row">
          <div className="w-100 text-center font-weight-bold">
            <span className="register-title">
              {!signup ? "Login" : "Sign Up"}
            </span>
          </div>
        </div>
        <div className="register-details d-flex flex-column mt-2 mb-3 ">
          {signup ? (
            <div className="d-flex flex-column">
              <span>Name</span>
              <input
                className="register-input"
                type="text"
                placeholder="john wick"
                onChange={(e) => {
                  setunfilled(false);
                  setmatch(true);
                  setexist(false);
                  setusername(e.target.value);
                }}
              ></input>
            </div>
          ) : null}
          <div className="d-flex flex-column">
            <span>Email</span>
            <input
              className="register-input"
              type="email"
              placeholder="john@gmail.com"
              onChange={(e) => {
                setunfilled(false);
                setexist(false);
                setmatch(true);
                setemail_id(e.target.value);
              }}
            ></input>
          </div>
          {/* {signup ? (
            <div className="d-flex flex-column">
              <span>Contact No.</span>
              <input
                className="register-input"
                type="phone"
                placeholder="1234567890"
              ></input>
            </div>
          ) : null} */}
          <div className="d-flex flex-column">
            <span>Password</span>
            <input
              className="register-input"
              type="password"
              onChange={(e) => {
                setunfilled(false);
                setexist(false);
                setmatch(true);
                setpassword(e.target.value);
              }}
            ></input>
          </div>
          {unfilled ? (
            <div className="alert-text text-center m-0">
              Please fill all the details
            </div>
          ) : null}
          {exist ? (
            <div className="alert-text text-center m-0">
              Username or email alreadt exist
            </div>
          ) : null}
          {!match ? (
            <div className="alert-text text-center m-0">
              wrong Email or password
            </div>
          ) : null}
          <button className="submit-button" onClick={SubmitHandler}>
            Submit
          </button>
          <div>
            <span className="text-muted">
              {signup ? "Already a user?" : "Not Registered yet?"} {""}{" "}
            </span>
            <span
              className="side-text font-weight-light"
              onClick={() => {
                setsignup(!signup);
              }}
            >
              {!signup ? "Sign Up" : "Login"}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
