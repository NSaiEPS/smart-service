import React from "react";
import { createBrowserRouter } from "react-router";
import Login from "./pages/Login";
import { Home } from "./pages/Home";
import Service from "./pages/Service";
import MyBookings from "./pages/MyBookings";

function Router() {
  console.log("rendered");
  return [
    {
      path: "/",
      children: <Login />,
    },
    {
      path: "/home",
      children: <Home />,
    },
    {
      path: "/service",
      children: <Service />,
    },
    {
      path: "/my-bookings",
      children: <MyBookings />,
    },
  ];
}

export default Router;
