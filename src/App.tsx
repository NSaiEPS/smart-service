import { useState } from "react";

import { createBrowserRouter, RouterProvider, useNavigate } from "react-router";
import Login from "./pages/Login";

import { Home } from "./pages/Home";
import Service from "./pages/Service";
import MyBookings from "./pages/MyBookings";
import ProtectedRoute from "./ProtectedRoute";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <ProtectedRoute login={true} children={<Login />} />,
    },
    { path: "/home", element: <ProtectedRoute children={<Home />} /> },

    {
      path: "/service/:id",
      element: <ProtectedRoute children={<Service />} />,
    },

    {
      path: "/my-bookings",
      element: <ProtectedRoute children={<MyBookings />} />,
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
      {/* <Login /> */}
    </>
  );
}

export default App;
