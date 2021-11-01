import React from "react";
import { Redirect, Route } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function protectedRoute({ component: Component, ...restOfProps }) {
  const isauthenticated = sessionStorage.getItem("user");

  if(!isauthenticated){
    toast.info("Please Log in")
  }

  return (
    <Route
      {...restOfProps}
      render={(props) =>
        isauthenticated ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
}

export default protectedRoute;
