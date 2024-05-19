import React, {useState, useEffect} from "react";
import "./Profile.css";

import { useDispatch, useSelector } from 'react-redux';
import { set_watchlist, reset_watchlist, set_likes, reset_likes, select_user_email, select_user_watchlist, select_user_likes } from '../Redux/reducer'

import Image from "../Avatar/user_image.png";
import Profile_image from "../Avatar/profile.jpeg";

const Profile = () => {
  const [left, setleft] = useState(true); 
  const user_email_id = useSelector(select_user_email);
  const user_watchlist = useSelector(select_user_watchlist);
  const user_likes = useSelector(select_user_likes);
  const [empty_watchlist, setempty_watchlist] = useState(false);
  const [empty_likes, setempty_likes] = useState(false);


  useEffect(() => {
    if(user_watchlist.length == 0) setempty_watchlist(true);
    if(user_likes.length == 0) setempty_likes(true);
  }, [])

  const watchlist = [];
  const likelist = [];

  const watchlist_movies = (props) => { 
    user_watchlist?.forEach((data, index) => {
      watchlist.push(
        <List data={data}/>
      )
    })
  };
  watchlist_movies();


  const likelist_movies = (props) => { 
    user_likes?.forEach((data, index) => {
      likelist.push(
        <List data={data}/>
      )
    })
  };
  likelist_movies();



  const List = (props) => {
    return(
      <div className="movies d-flex flex-row m-1">
        <img className="movie-image ml-2 mr-3" src={props.Image}></img>
        <div className="movie-name">movie-name is something out of line so it's not fully visible</div>
      </div>
    )
  }

  return (
    <div className="p-2">
      <div className="profile w-100 bg-white mt-3 d-flex flex-column">
        <div className="image-div d-flex flex-col">
          {/* <div className="background1 "></div> */}
          {/* <div className="background2 "></div> */}
          <img className="profile-image" src={Profile_image} alt="pic"></img>
          
        </div>
        <span className="username mb-5">username</span>
        <div className="profile-info p-lg-5 p-sm-3 mb-3">
          <div className="upper d-flex flex-row">
            <div className={"category text-l col-6 text-center p-1 mr-3" + (left ? " active" : "")} onClick={() => {setleft(true);}}>Watchlist</div>
            <div className={"category text-l col-6 text-center p-1" + (!left ? " active" : "")} onClick={() => {setleft(false);}}>
              Likes
            </div>
          </div>
          <div className="lower mt-3">
            {left ? (
              <div>
                {
                  empty_watchlist ? <div className="empty-text">No movie in watchlist</div> : <div>{<List/>}</div>
                }
              </div>
            ) : (
              <div>
                {
                  empty_likes ? <div className="empty-text">Like movies to add to your list</div> : <div>{<List/>}</div>
                }
              </div>
            ) } 
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
