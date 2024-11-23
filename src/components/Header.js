import React from "react";
import auth from "../utils/firebase";
import { getAuth } from "firebase/auth";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const handleSignOut = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        navigate("/error");
      });
  };
  return (
    <div className="absolute px-8 py-2 bg-gradient-to-b from-black z-10 w-full flex justify-between">
      <img
        className="w-44"
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="logo-img"
      ></img>
      { user &&
      <div className="flex">
        <img
          className="w-12 h-12 p-2 m-2"
          src={user.photoURL}
          alt="net-icon"
        ></img>
        <button onClick={handleSignOut} className="font-bold text-white">
          SignOut
        </button>
      </div>}
    </div>
      
  );
};

export default Header;
