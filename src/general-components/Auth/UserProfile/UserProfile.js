import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useUserAuth } from "../../../context/AuthContext";

const UserProfile = () => {
  const { logOut, user } = useUserAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/login");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className={'container'}>
      <div className="p-4 box mt-3 text-center border w-25">
        <strong>{user && user.phoneNumber}</strong>
        <br />
        <Button className={'mt-2'} onClick={handleLogout}>
          Log out
        </Button>
      </div>
    </div>
  );
};

export default UserProfile;
