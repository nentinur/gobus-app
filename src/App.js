import React from "react";
import { GObusNavBar } from "./component/Navigation/GObusNavBar";
import { Outlet } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import { createBrowserRouter } from "react-router-dom";

import { HomePage } from "./page/HomePage";
import DetailHistory from "./component/History/DetailHistory";
import { FilterBus } from "./component/Booking/FilterBus";
import { Login } from "./component/Login";
import { ProfilePage } from "./page/ProfilePage";
import { SignUp } from "./component/SignUp";
import HistoryPage from "./page/HistoryPage";
import { Booking } from "./component/Booking";
import { EditProfile } from "./component/Profile/EditProfile";

const router = createBrowserRouter([
  {
    path: "/in",
  },
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <HomePage />,
      },
      {
        path: "history",
        element: <HistoryPage />,
      },
      {
        path: "history/detail",
        element: <DetailHistory />,
      },
      {
        path: "filter-bus",
        element: <FilterBus />,
      },
      {
        path: "booking",
        element: <Booking />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "profile/edit",
        element: <EditProfile />,
      },
      {
        path: "login/signup",
        element: <SignUp />,
      },
      {
        path: "profile",
        element: <ProfilePage />,
      },
    ],
  },
]);

const App = () => {
  return (
    <div>
      <React.StrictMode>
        <RouterProvider router={router} />
      </React.StrictMode>
    </div>
  );
};

function Layout() {
  return (
    <div>
      <Outlet />
      <GObusNavBar />
    </div>
  );
}

export default App;
