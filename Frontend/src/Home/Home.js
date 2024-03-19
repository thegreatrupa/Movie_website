import React, { useState, useLayoutEffect, useEffect } from "react";
import Image1 from "../Avatar/Image1.jpg";
import { Link } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from 'react-redux';
import { set_username, set_watchlist, set_likes, select_user_email, select_user_watchlist, select_user_likes } from '../Redux/reducer'

import Profile from "../Profile/Profile";
import "./Home.css";

import Left from "../Avatar/left.png";
import Right from "../Avatar/right.png";
import account from "../Avatar/account.png";
import user_image from "../Avatar/user_image.png"

const Home = (props) => {
  const [data, setdata] = useState();
  const [topRated, settopRated] = useState();
  const [upcoming, setupcoming] = useState();
  const [nowPlaying, setnowPlaying] = useState();
  const [logged_in, setlogged_in] = useState(false);
  // const [userData, setuserData] = useState({});
  
  const dispatch = useDispatch();
  const user_email_id = useSelector(select_user_email);
  const user_watchlist = useSelector(select_user_watchlist);
  const user_likes = useSelector(select_user_likes);

  const frontUrl = "https://api.themoviedb.org/3/movie/";
  const backUrl = "?api_key=712e77c35503480f5f2b8c563386db58";

  useEffect(() => {
    if(user_email_id !== ""){
      setlogged_in(true);
      // console.log("user id is : " + user_email_id);
      const formData = {
        "email" : user_email_id
      }
      axios ({
        url: "http://localhost:3001/userData",
        method: "POST",
        data: formData
      }).then((res) => {
        console.log(res);
        dispatch(set_watchlist(res.data.watchlist));
        dispatch(set_likes(res.data.likes));
      }).catch((err) => {
        console.log(err);
      })
    }

  },[])

  const baseurl = "https://image.tmdb.org/t/p/original/";

  const popularMoviesAPI = async () => {
    const URL = frontUrl + "popular" + backUrl;
    const response = await axios.get(URL);
    setdata(response.data);
    // console.log(response.data);
  };

  const topRatedMoviesAPI = async () => {
    const URL = frontUrl + "top_rated" + backUrl; 
    const response = await axios.get(URL);
    settopRated(response.data);
  };

  const nowPlayingAPI = async () => {
    const URL = frontUrl + "now_playing" + backUrl; 
    const response = await axios.get(URL);
    setnowPlaying(response.data);
  };

  const upcomingAPI = async () => {
    const URL = frontUrl + "/upcoming" + backUrl; 
    const response = await axios.get(URL);
    setupcoming(response.data);
  };

  //console.log(nowPlaying);

  useLayoutEffect(() => {
    popularMoviesAPI();
    topRatedMoviesAPI();
    nowPlayingAPI();
    upcomingAPI();
  }, []); 

  
  // const Demo = () => {
  //   return (
  //     <Link to="/Register">
  //       <span>Register</span>
  //     </Link>
  //   );
  // };

  const PopularMovies = (props) => {
    return (
      <div className="card d-flex flex-column justify-content-center align-items center">
        <Link to="/screen2" state={[data, props.i]}>
          <img
            className="image w-100"
            src={data ? baseurl + data.results[props.i].poster_path : Image1}
            alt="movie"
          ></img>
        </Link>
      </div>
    );
  };

  const TopRatedMovies = (props) => {
    return (
      <div className="card d-flex flex-column justify-content-center align-items center">
        <Link to="/screen2" state={[topRated, props.i]}>
          <img
            className="image w-100"
            src={
              topRated
                ? baseurl + topRated.results[props.i].poster_path
                : Image1
            }
            alt="movie"
          ></img>
        </Link>
      </div>
    );
  };

  const NowPlayingMovies = (props) => {
    return (
      <div className="card d-flex flex-column justify-content-center align-items center">
        <Link to="/screen2" state={[nowPlaying, props.i]}>
          <img
            className="image w-100"
            src={
              nowPlaying
                ? baseurl + nowPlaying.results[props.i].poster_path
                : Image1
            }
            alt="movie"
          ></img>
        </Link>
      </div>
    );
  };

  const UpcomingMovies = (props) => {
    return (
      <div className="card d-flex flex-column justify-content-center align-items center">
        <Link to="/screen2" state={[upcoming, props.i]}>
          <img
            className="image w-100"
            src={
              upcoming
                ? baseurl + upcoming.results[props.i].poster_path
                : Image1
            }
            alt="movie"
          ></img>
        </Link>
      </div>
    );
  };

  return (
    <div className="screen1 w-100 d-flex flex-column mt-3">
      <div className="main-text text-left">
        <span className="title ml-5">Movies</span>
        <div className="float-right text-light">
        <Link to={logged_in ? "/profile" : "/Register"}>
          <img
            src={!logged_in ? account : user_image}
            className="bg-light mt-3 rounded-circle mr-3 cursor-pointer"
            alt="account"
            height={40}
            width={40}
          ></img>
        </Link>
        </div>
      </div>
      <div className="mb-1 ml-2 mt-3">
        <span className="movie-type text-white">Popular Movies</span>
      </div>
      <div className="contents d-flex flex-row mb-2" id="contents">
        <button
          className="scroll-arrow"
          onClick={() => {
            document.getElementById("contents").scrollBy({
              left: -window.innerWidth,
              behavior: "smooth",
            });
          }}
        >
          <img src={Left} className="" alt="left" width={30} height={30}></img>
        </button>
        {/* {data.map(())} */}
        {<PopularMovies i={0} />}
        {<PopularMovies i={1} />}
        {<PopularMovies i={2} />}
        {<PopularMovies i={3} />}
        {<PopularMovies i={4} />}
        {<PopularMovies i={5} />}
        {<PopularMovies i={6} />}
        {<PopularMovies i={7} />}
        {<PopularMovies i={8} />}
        {<PopularMovies i={9} />}
        {<PopularMovies i={10} />}
        {<PopularMovies i={11} />}
        {<PopularMovies i={12} />}
        {<PopularMovies i={13} />}
        {<PopularMovies i={14} />}
        {<PopularMovies i={15} />}
        {<PopularMovies i={16} />}
        {<PopularMovies i={17} />}
        {<PopularMovies i={18} />}
        {<PopularMovies i={19} />}
        <button
          className="scroll-arrow2"
          onClick={() => {
            document.getElementById("contents").scrollBy({
              left: window.innerWidth,
              behavior: "smooth",
            });
          }}
        >
          <img
            src={Right}
            className=""
            alt="right"
            width={30}
            height={30}
          ></img>
        </button>
      </div>

      <div className="mb-1 ml-2 mt-3">
        <span className="movie-type text-white">Top Rated Movies</span>
      </div>
      <div className="contents d-flex flex-row mb-2" id="contents2">
        <button
          className="scroll-arrow"
          onClick={() => {
            document.getElementById("contents2").scrollBy({
              left: -window.innerWidth,
              behavior: "smooth",
            });
          }}
        >
          <img src={Left} className="" alt="left" width={30} height={30}></img>
        </button>
        {<TopRatedMovies i={0} />}
        {<TopRatedMovies i={1} />}
        {<TopRatedMovies i={2} />}
        {<TopRatedMovies i={3} />}
        {<TopRatedMovies i={4} />}
        {<TopRatedMovies i={5} />}
        {<TopRatedMovies i={6} />}
        {<TopRatedMovies i={7} />}
        {<TopRatedMovies i={8} />}
        {<TopRatedMovies i={9} />}
        {<TopRatedMovies i={10} />}
        {<TopRatedMovies i={11} />}
        {<TopRatedMovies i={12} />}
        {<TopRatedMovies i={13} />}
        {<TopRatedMovies i={14} />}
        {<TopRatedMovies i={15} />}
        {<TopRatedMovies i={16} />}
        {<TopRatedMovies i={17} />}
        {<TopRatedMovies i={18} />}
        {<TopRatedMovies i={19} />}
        <button
          className="scroll-arrow2"
          onClick={() => {
            document.getElementById("contents2").scrollBy({
              left: window.innerWidth,
              behavior: "smooth",
            });
          }}
        >
          <img
            src={Right}
            className=""
            alt="right"
            width={30}
            height={30}
          ></img>
        </button>
      </div>

      <div className="mb-1 ml-2 mt-3">
        <span className="movie-type text-white">Now Playing Movies</span>
      </div>
      <div className="contents d-flex flex-row mb-2" id="contents3">
        <button
          className="scroll-arrow"
          onClick={() => {
            document.getElementById("contents3").scrollBy({
              left: -window.innerWidth,
              behavior: "smooth",
            });
          }}
        >
          <img src={Left} className="" alt="left" width={30} height={30}></img>
        </button>
        {<NowPlayingMovies i={0} />}
        {<NowPlayingMovies i={1} />}
        {<NowPlayingMovies i={2} />}
        {<NowPlayingMovies i={3} />}
        {<NowPlayingMovies i={4} />}
        {<NowPlayingMovies i={5} />}
        {<NowPlayingMovies i={6} />}
        {<NowPlayingMovies i={7} />}
        {<NowPlayingMovies i={8} />}
        {<NowPlayingMovies i={9} />}
        {<NowPlayingMovies i={10} />}
        {<NowPlayingMovies i={11} />}
        {<NowPlayingMovies i={12} />}
        {<NowPlayingMovies i={13} />}
        {<NowPlayingMovies i={14} />}
        {<NowPlayingMovies i={15} />}
        {<NowPlayingMovies i={16} />}
        {<NowPlayingMovies i={17} />}
        {<NowPlayingMovies i={18} />}
        {<NowPlayingMovies i={19} />}
        <button
          className="scroll-arrow2"
          onClick={() => {
            document.getElementById("contents3").scrollBy({
              left: window.innerWidth,
              behavior: "smooth",
            });
          }}
        >
          <img
            src={Right}
            className=""
            alt="right"
            width={30}
            height={30}
          ></img>
        </button>
      </div>

      <div className="mb-1 ml-2 mt-3">
        <span className="movie-type text-white">Upcoming Movies</span>
      </div>
      <div className="contents d-flex flex-row mb-2" id="contents4">
        <button
          className="scroll-arrow"
          onClick={() => {
            document.getElementById("contents4").scrollBy({
              left: -window.innerWidth,
              behavior: "smooth",
            });
          }}
        >
          <img src={Left} className="" alt="left" width={30} height={30}></img>
        </button>
        {<UpcomingMovies i={0} />}
        {<UpcomingMovies i={1} />}
        {<UpcomingMovies i={2} />}
        {<UpcomingMovies i={3} />}
        {<UpcomingMovies i={4} />}
        {<UpcomingMovies i={5} />}
        {<UpcomingMovies i={6} />}
        {<UpcomingMovies i={7} />}
        {<UpcomingMovies i={8} />}
        {<UpcomingMovies i={9} />}
        {<UpcomingMovies i={10} />}
        {<UpcomingMovies i={11} />}
        {<UpcomingMovies i={12} />}
        {<UpcomingMovies i={13} />}
        {<UpcomingMovies i={14} />}
        {<UpcomingMovies i={15} />}
        {<UpcomingMovies i={16} />}
        {<UpcomingMovies i={17} />}
        {<UpcomingMovies i={18} />}
        {<UpcomingMovies i={19} />}
        <button
          className="scroll-arrow2"
          onClick={() => {
            document.getElementById("contents4").scrollBy({
              left: window.innerWidth,
              behavior: "smooth",
            });
          }}
        >
          <img
            src={Right}
            className=""
            alt="right"
            width={30}
            height={30}
          ></img>
        </button>
      </div>
    </div>
  );
};

export default Home;
