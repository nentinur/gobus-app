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
import ChatPage from "./page/ChatPage";
import { Chat } from "./component/Chat";

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
        element: <ChatPage />,
      },
      {
        path: "chat/detail",
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
        path: "profile/login",
        element: <Login />,
      },
      {
        path: "profile/login/signup",
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
