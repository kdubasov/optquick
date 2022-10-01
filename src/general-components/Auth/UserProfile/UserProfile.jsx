import React from "react";
import AddUserData from "./components/AddUserData";
import UserData from "./components/UserData";

const UserProfile = () => {

  return (
    <div className={'container d-flex flex-wrap'}>
      <UserData />
      <AddUserData />
    </div>
  );
};

export default UserProfile;
