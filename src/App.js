import React from "react";
import { GObusNavBar } from "./component/Navigation/GObusNavBar";
import { Outlet } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import { createBrowserRouter } from "react-router-dom";

import { HomePage } from "./page/HomePage";
import DetailHistory from "./component/History/DetailHistory";
import Chat from "./page/Chat";
import { FilterBus } from "./component/Booking/FilterBus";
import MapComponent from "./component/GObusMaps/SelectLocation";
import { Login } from "./component/Login";
import { ProfilePage } from "./page/ProfilePage";

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
        path: "chat",
        element: <Chat />,
      },
      {
        path: "profile/history",
        element: <DetailHistory />,
      },
      {
        path: "filter-bus",
        element: <FilterBus />,
      },
      {
        path: "find",
        element: <MapComponent />,
      },
      {
        path: "login",
        element: <Login />,
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
