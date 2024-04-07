import React, { useEffect, useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { set_watchlist, reset_watchlist, set_likes, reset_likes, select_user_email, select_user_watchlist, select_user_likes } from '../Redux/reducer'

import "./Details.css";

import Image1 from "../Avatar/Image1.jpg";
// import BookingModal from "../Modal/BookingModal";
import Info from "../Avatar/info.png";

const Details = (props) => {
  const baseurl = "https://image.tmdb.org/t/p/original/";

  const [more, setmore] = useState(false);
  // const [modal, setmodal] = useState(false);
  const location = useLocation();
  const data = location.state; 
  // console.log(data);
  const movie_name = data.title; 

  const dispatch = useDispatch();
  const user_email_id = useSelector(select_user_email);
  const user_watchlist = useSelector(select_user_watchlist);
  const user_likes = useSelector(select_user_likes);

  const [inWatchList, setinWatchList] = useState(false);
  const [liked, setliked] = useState(false);
  const [loggedIn, setloggedIn] = useState(false);

  useEffect(() => {
    if(user_email_id !== "" ) setloggedIn(true);
  }, [])

  useEffect(() => {
    if(user_email_id !== ""){
      for(let i=0; i<user_watchlist.length; i++){
        if(user_watchlist[i] === movie_name) {setinWatchList(true); break;}
      }
      for(let i=0; i<user_likes.length; i++){
        if(user_likes[i] === movie_name) {setliked(true); break;}
      }
    }
  },[])


  const WatchlistHandler = () => {
    if(!loggedIn) {alert("Login to add in watchlist")}
    else {
      const formData = {
        "email" : user_email_id,
        "movie_name": movie_name
      }
      if(!inWatchList){
        axios ({
          url: "http://localhost:3001/add_watchlist",
          method: "POST",
          data: formData
        }).then((res) => {
          console.log(res);
          dispatch(set_watchlist(movie_name));
        }).catch((err) => {
          console.log(err);
        })
      }
      else {
        axios ({
          url: "http://localhost:3001/delete_watchlist",
          method: "POST",
          data: formData
        }).then((res) => {
          console.log(res);
          dispatch(reset_watchlist(movie_name));
        }).catch((err) => {
          console.log(err);
        })
      }
      setinWatchList(!inWatchList);
    }
  }


  const LikeHandler = () => {
    if(!loggedIn) {alert("Login to like")}
    else {
      const formData = {
        "email" : user_email_id,
        "movie_name": movie_name
      }
      if(!liked){
        axios ({
          url: "http://localhost:3001/add_like",
          method: "POST",
          data: formData
        }).then((res) => {
          console.log(res);
          dispatch(set_likes(movie_name));
        }).catch((err) => {
          console.log(err);
        })
      }
      else {
        console.log(formData)
        axios ({
          url: "http://localhost:3001/delete_like",
          method: "POST",
          data: formData
        }).then((res) => {
          console.log(res);
          dispatch(reset_likes(movie_name));
        }).catch((err) => {
          console.log(err);
        })
      }
      setliked(!liked);
    }
  }



  // const closeModal = () => {
  //   setmodal(false);
  // }; 

  return (
    <div className="screen2 w-100 d-flex flex-column">
      <div className="movie d-flex flex-column mt-3 p-2">
        <div className="d-flex flex-column">
          <div className="justify-content-center align-items-center">
            <img
              className="image2"
              src={data ? baseurl + data.poster_path : Image1}
              alt="poster"
            ></img>
          </div>
          <div className="details mt-3">
            <h5 className="summary font-weight-light">
              {data ? data.overview : "Summary"}
            </h5>
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
                  Language : {data ? data.original_language : null}{" "}
                </span>
                <span className="mt-3 more-text">
                  Rating : {data ? data.vote_average : null}{" "}
                </span>
                <span className="mt-3 more-text">
                  Vote Count : {data ? data.vote_count : null}{" "}
                </span>
                <span className="mt-3 more-text">
                  Popularuty : {data ? data.popularity : null}{" "}
                </span>
                <span className="mt-3 more-text">
                  Release Date : {data ? data.release_date : null}{" "}
                </span>
                 
              </div>
            ) : null}
            <button
              className={"btn p-1 text-center mt-4 " + (inWatchList && "active")}
              onClick={() => {
                WatchlistHandler();
              }}
            >
              {inWatchList ? "In watchlist" : "Add to watchlist"}
            </button>
            <button
              className={"btn p-1 text-center mt-4 ml-1 " + (liked && "active")}
              onClick={() => {
                LikeHandler();
              }}
            >
              {liked ? "Liked" : "Like"}
            </button>
          </div>
        </div>
      </div>
      {/* {modal ? (
        <BookingModal
          closeModal={closeModal}
          //name={data ? data[0][data[1]].show.name : null}
          image={data ? baseurl + data[0].results[data[1]].poster_path : Image1}
        />
      ) : null} */}
    </div>
  );
};

export default Details;
