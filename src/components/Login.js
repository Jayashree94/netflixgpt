import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";

const Login = () => {
  const [isSignin, setIsSignin] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleButtonClick = () => {
    //Validate form data
    const message = checkValidData(email.current.value, password.current.value);
    setErrorMessage(message);

  };
  const toggleSigninForm = () => {
    setIsSignin(!isSignin);
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/81d64f3c-9627-4741-8f74-422bf35f9f1d/web/IN-en-20241104-TRIFECTA-perspective_55263ea2-af7f-40ed-9cf0-7029a9b9baf4_medium.jpg"
          alt="bg-img"
        ></img>
      </div>
      <form onSubmit={(e) => e.preventDefault()} className="w-3/12 absolute p-12 bg-black mt-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80">
        <h1 className="font-bold text-2xl m-2 p-2">
          {isSignin ? "Sign in" : " Sign Up"}
        </h1>
        {!isSignin && (
          <input
            type="text"
            placeholder="Full Name"
            className="my-4 p-4 w-full bg-gray-600 rounded-lg"
          ></input>
        )}
        <input
          ref={email}
          type="text"
          placeholder="email address"
          className="my-4 p-4 w-full bg-gray-600 rounded-lg"
        ></input>
        <input
          ref={password}
          type="password"
          placeholder="password"
          className="my-4 p-4 w-full bg-gray-600 rounded-lg"
        ></input>
        <button
          className="my-2 p-2 bg-red-700 w-full rounded-lg"
          onClick={handleButtonClick}
        >
          {isSignin ? "Sign in" : " Sign Up"}{" "}
        </button>
        <p className="m-2 p-2 cursor-pointer" onClick={toggleSigninForm}>
        
          {isSignin
            ? "New to Netflix ? please Sign Up"
            : "Already registered Sign In now"}{" "}
        </p>
        <p className="m-2 p-2 font-bold text-red-600"> {errorMessage}</p>
      </form>
    </div>
  );
};

export default Login;
