import React, { useState, useLayoutEffect, useEffect } from "react";
import Image1 from "../Avatar/Image1.jpg";
import { Link } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from 'react-redux';
import { set_username, set_watchlist, set_likes, select_user_email, select_user_watchlist, select_user_likes } from '../Redux/reducer'

import Profile from "../Profile/Profile";
import "./Home.css";

import Left from "../Avatar/left-icon.png";
import Right from "../Avatar/right.png";
import account from "../Avatar/account.png";
import user_image from "../Avatar/user_image.png";

const Home = (props) => {
  const [popular, setpopular] = useState();
  const [topRated, settopRated] = useState();
  const [upcoming, setupcoming] = useState();
  const [nowPlaying, setnowPlaying] = useState();
  const [logged_in, setlogged_in] = useState(false);

  const [sciFi, setsciFi] = useState([]);
  const [drama, setdrama] = useState([]);
  const [action, setaction] = useState([]);
  const [supernatural, setsupernatural] = useState([]);
  const [comedy, setcomedy] = useState([]);
  const [adventure, stadventure] = useState([]);
  const [shonen, setshonen ] = useState([]);
  const [fantasy, setfantasy] = useState([]);
  const [romance, setromance] = useState([]);

  const sciFiList = [];
  const dramaList = [];
  const actionList = [];
  const supernaturalList = [];
  const comedyList = [];
  const adventureList = [];
  const shonenList = [];
  const fantasyList = [];
  const romanceList = [];

  // const popularList = [];
  // const topRatedList = [];
  // const nowPlayingList = [];
  // const upcomingList = [];
  
  const dispatch = useDispatch();
  const user_email_id = useSelector(select_user_email);
  const user_watchlist = useSelector(select_user_watchlist);
  const user_likes = useSelector(select_user_likes);

  const frontUrl = "https://api.themoviedb.org/3/movie/";
  const backUrl = "?api_key=712e77c35503480f5f2b8c563386db58";
  const baseurl = "https://image.tmdb.org/t/p/original/";

  useEffect(() => {
    if(user_email_id !== ""){
      setlogged_in(true);
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

  
  useLayoutEffect(() => {
    movies();
  }, [])


  // const popularMoviesAPI = async () => {
  //   const URL = frontUrl + "popular" + backUrl;
  //   const response = await axios.get(URL);
  //   setpopular(response.data.results); 
  // };

  // const topRatedMoviesAPI = async () => {
  //   const URL = frontUrl + "top_rated" + backUrl; 
  //   const response = await axios.get(URL);
  //   settopRated(response.data.results);
  // };

  // const nowPlayingAPI = async () => {
  //   const URL = frontUrl + "now_playing" + backUrl; 
  //   const response = await axios.get(URL);
  //   setnowPlaying(response.data.results);
  // };

  // const upcomingAPI = async () => {
  //   const URL = frontUrl + "/upcoming" + backUrl; 
  //   const response = await axios.get(URL);
  //   setupcoming(response.data.results);
  // };


  const movies = async () => {
    const URL = "http://localhost:3001/movies"; 
    const response = await axios.get(URL);
    <category data={response}/>
    // category(response);
  };
  movies();

  const category = (props) => {
    // console.log(props)
    for(let i=0; i<props.data.length; i++){
      for(let j=0; j<props.data[i].genre.length; j++){ 
        if(props.data[i].genre[j]=="action") action.push(props.data[i]);
        else if(props.data[i].genre[j]=="sci-fi") sciFi.push(props.data[i]);
        else if(props.data[i].genre[j]=="adventure") adventure.push(props.data[i]);
        else if(props.data[i].genre[j]=="comedy") comedy.push(props.data[i]);
        else if(props.data[i].genre[j]=="drama") drama.push(props.data[i]);
        else if(props.data[i].genre[j]=="supernatural") supernatural.push(props.data[i]);
        else if(props.data[i].genre[j]=="shonen") shonen.push(props.data[i]);
        else if(props.data[i].genre[j]=="romance") romance.push(props.data[i]);
        else if(props.data[i].genre[j]=="fantasy") fantasy.push(props.data[i]);
      }
    }
  }
 

  // useLayoutEffect(() => {
  //   popularMoviesAPI();
  //   topRatedMoviesAPI();
  //   nowPlayingAPI();
  //   upcomingAPI();
  // }, []); 



  const Movies = (props) => { 
    return (
      <div className="card d-flex ">
        <Link to="/screen2" state={props.data ? props.data : ""}>
          <img
            className="image"
            src={props.data ? props.data.poster : Image1}
            alt="movie"
          ></img>
        </Link>
      </div>
    );
  };

  const sciFiMovies = (props) => {
    sciFi?.forEach((data, index) => {
      sciFiList.push(
        <Movies data={data}/>
      )
    })
  };
  sciFiMovies();

  const dramaMovies = (props) => { 
    drama?.forEach((data, index) => {
      dramaList.push(
        <Movies data={data}/>
      )
    })
  };
  dramaMovies();

  const actionMovies = (props) => { 
    action?.forEach((data, index) => {
      actionList.push(
        <Movies data={data}/>
      )
    })
  };
  actionMovies();

  const supernaturalMovies = (props) => { 
    supernatural?.forEach((data, index) => {
      supernaturalList.push(
        <Movies data={data}/>
      )
    })
  };
  supernaturalMovies();

  const comedyMovies = (props) => { 
    comedy?.forEach((data, index) => {
      comedyList.push(
        <Movies data={data}/>
      )
    })
  };
  comedyMovies();

  const adventureMovies = (props) => { 
    adventure?.forEach((data, index) => {
      adventureList.push(
        <Movies data={data}/>
      )
    })
  };
  adventureMovies();

  const shonenMovies = (props) => { 
    shonen?.forEach((data, index) => {
      shonenList.push(
        <Movies data={data}/>
      )
    })
  };
  shonenMovies();

  const fantasyMovies = (props) => { 
    fantasy?.forEach((data, index) => {
      fantasyList.push(
        <Movies data={data}/>
      )
    })
  };
  fantasyMovies();

  const romanceMovies = (props) => { 
    romance?.forEach((data, index) => {
      romanceList.push(
        <Movies data={data}/>
      )
    })
  };
  romanceMovies();
  

  // const popularMovies = (props) => { 
  //   popular?.forEach((data, index) => {
  //     popularList.push(
  //       <Movies data={data}/>
  //     )
  //   })
  // };
  // popularMovies();

  // const topRatedMovies = (props) => { 
  //   topRated?.forEach((data, index) => {
  //     topRatedList.push(
  //       <Movies data={data}/>
  //     )
  //   })
  // };
  // topRatedMovies();

  // const nowPlayingMovies = (props) => { 
  //   nowPlaying?.forEach((data, index) => {
  //     nowPlayingList.push(
  //       <Movies data={data}/>
  //     )
  //   })
  // };
  // nowPlayingMovies();

  // const upcomingMovies = (props) => { 
  //   upcoming?.forEach((data, index) => {
  //     upcomingList.push(
  //       <Movies data={data}/>
  //     )
  //   })
  // };
  // upcomingMovies();

  return (
    <div className="screen1 w-100 d-flex flex-column mt-3">
      <div className="main-text text-left">
        <span className="title t1 ml-5">M</span>
        <span className="title t2">O</span>
        <span className="title t3">V</span>
        <span className="title t4">I</span>
        <span className="title t5">E</span>
        <span className="title t6">S</span>
        <div className="float-right text-light">
        <Link to={!logged_in ? "/profile" : "/Register"}>
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
        <span className="movie-type text-white">Comedy Movies</span>
      </div>
      <div className="contents d-flex flex-col mb-2" id="contents">
        <button
          className="scroll-arrow"
          onClick={() => {
            document.getElementById("contents").scrollBy({
              left: -window.innerWidth,
              behavior: "smooth",
            });
          }}
        >
          <img src={Left} className="left-arrow" alt="left" ></img>
        </button>
        {comedyList}
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
            src={Left}
            className="right-arrow"
            alt="right" 
          ></img>
        </button>
      </div>

      <div className="mb-1 ml-2 mt-3">
        <span className="movie-type text-white">Drama Movies</span>
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
          <img src={Left} className="left-arrow" alt="left"  ></img>
        </button>
        {dramaList}
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
            src={Left}
            className="right-arrow"
            alt="right" 
          ></img>
        </button>
      </div>

      <div className="mb-1 ml-2 mt-3">
        <span className="movie-type text-white">Action Movies</span>
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
          <img src={Left} className="left-arrow" alt="left"  ></img>
        </button> 
        {actionList}
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
            src={Left}
            className="right-arrow"
            alt="right" 
          ></img>
        </button>
      </div>

      <div className="mb-1 ml-2 mt-3">
        <span className="movie-type text-white">Supernatural Movies</span>
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
          <img src={Left} className="left-arrow" alt="left"  ></img>
        </button>
        {supernaturalList}
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
            src={Left}
            className="right-arrow"
            alt="right" 
          ></img>
        </button>
      </div>

      <div className="mb-1 ml-2 mt-3">
        <span className="movie-type text-white">Romance Movies</span>
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
          <img src={Left} className="left-arrow" alt="left"  ></img>
        </button> 
        {romanceList}
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
            src={Left}
            className="right-arrow"
            alt="right" 
          ></img>
        </button>
      </div>

      <div className="mb-1 ml-2 mt-3">
        <span className="movie-type text-white">Adventure Movies</span>
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
          <img src={Left} className="left-arrow" alt="left"  ></img>
        </button> 
        {adventureList}
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
            src={Left}
            className="right-arrow"
            alt="right" 
          ></img>
        </button>
      </div>

      <div className="mb-1 ml-2 mt-3">
        <span className="movie-type text-white">Fantasy Movies</span>
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
          <img src={Left} className="left-arrow" alt="left"  ></img>
        </button> 
        {fantasyList}
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
            src={Left}
            className="right-arrow"
            alt="right" 
          ></img>
        </button>
      </div>

      <div className="mb-1 ml-2 mt-3">
        <span className="movie-type text-white">Shonen Movies</span>
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
          <img src={Left} className="left-arrow" alt="left"  ></img>
        </button> 
        {shonenList}
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
            src={Left}
            className="right-arrow"
            alt="right" 
          ></img>
        </button>
      </div>

      <div className="mb-1 ml-2 mt-3">
        <span className="movie-type text-white">Sci-fi Movies</span>
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
          <img src={Left} className="left-arrow" alt="left"  ></img>
        </button> 
        {sciFiList}
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
            src={Left}
            className="right-arrow"
            alt="right" 
          ></img>
        </button>
      </div>

    </div>
  );
};

export default Home;
