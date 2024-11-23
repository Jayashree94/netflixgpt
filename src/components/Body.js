import React, { useEffect } from "react";
import Browse from "./Browse";
import Login from "./Login";
import { createBrowserRouter, useNavigate } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
const Body = () => {
  const dispatch = useDispatch();


  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },

    {
      path: "/browse",
      element: <Browse />,
    },
  ]);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayname, photoURL } = user;
        dispatch(addUser({ uid: uid, email: email, displayname: displayname, photoURL : photoURL }));
        
      } else {
        dispatch(removeUser());
        
      }
    });
  }, []);

  return (
    <div>
      <RouterProvider
        router={appRouter}
        future={{
          v7_fetcherPersist: true,
          v7_normalizeFormMethod: true,
          v7_partialHydration: true,
          v7_relativeSplatPath: true,
          v7_skipActionErrorRevalidation: true,
          v7_startTransition: true,
        }}
      />
    </div>
  );
};

export default Body;
