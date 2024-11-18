import React from 'react'
import Browse from './Browse'
import Login from './Login';
import {createBrowserRouter} from "react-router-dom";
import { RouterProvider } from 'react-router-dom';

const Body = () => {

    const appRouter = createBrowserRouter([

        {
            path: "/",
            element : <Login/>
        },

        {
            path: "/browse",
            element : <Browse/>
                  }
    ]);
  return (
    <div>
      <RouterProvider router={appRouter} future= {{
        v7_fetcherPersist: true,
        v7_normalizeFormMethod: true,
        v7_partialHydration: true,
        v7_relativeSplatPath: true,
        v7_skipActionErrorRevalidation: true,
        v7_startTransition :true,
      }} />
      </div>
  )
}

export default Body