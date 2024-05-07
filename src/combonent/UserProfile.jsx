import React from "react";
import SideNav2 from "./SideNav2";
import UserInfo from "./Userinfo";

function UserProfile() {
  return (
    <>
      <div className="user-container ">
        <div className="row">
          <div className="col-md-3">
            <SideNav2 />
          </div>
          <div className="offset-1 col-md-8">
            <UserInfo />
          </div>
        </div>
      </div>
    </>
  );
}

export default UserProfile;
