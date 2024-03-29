import React, {useState, useEffect} from "react";
import "./Profile.css";

import { useDispatch, useSelector } from 'react-redux';
import { set_watchlist, reset_watchlist, set_likes, reset_likes, select_user_email, select_user_watchlist, select_user_likes } from '../Redux/reducer'

import Image from "../Avatar/user_image.png";

const Profile = () => {
  const [left, setleft] = useState(true);
  const [right, setright] = useState(false);
  const user_email_id = useSelector(select_user_email);
  const user_watchlist = useSelector(select_user_watchlist);
  const user_likes = useSelector(select_user_likes);


  const List = () => {
    return(
      <div className="movies d-flex flex-row">
        <img className="movie-image ml-2 mr-3" src={Image}></img>
        <div className="movie-name">movie-name is something out of line so it's not fully visi</div>
      </div>
    )
  }

  return (
    <div className="p-2">
      <div className="profile w-100 bg-white mt-3 d-flex flex-column">
        <div className="image-div d-flex flex-col">
          <div className="background1 "></div>
          {/* <div className="background2 "></div> */}
          <img className="profile-image" src={Image} alt="pic"></img>
          
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
            {<List/>}
            {<List/>}
            {<List/>}
            {<List/>}
            {<List/>}
            {<List/>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
