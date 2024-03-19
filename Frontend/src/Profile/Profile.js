import React from "react";
import "./Profile.css";

import Image from "../Avatar/user_image.png";

const Profile = () => {
  return (
    <div className="p-2">
      <div className="profile w-100 bg-white mt-3 d-flex flex-column">
        <div className="image-div mt-5 mb-5">
          <img className="profile-image" src={Image} alt="pic"></img>
        </div>
        <div className="profile-info p-2 mb-3">
          <div className="upper d-flex flex-row">
            <div className="category text-xl col-6 text-center p-1">left</div>
            <div className="category text-xl col-6 text-center active p-1">
              right
            </div>
          </div>
          <div className="lower"></div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
