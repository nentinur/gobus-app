import React from "react";
import GObusAppBar from "./component/Navigation/GObusAppBar";
import { GObusNavBar } from "./component/Navigation/GObusNavBar";
import { Outlet } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import { createBrowserRouter } from "react-router-dom";

import { HomePage } from "./component/Home";
import History from "./component/History";
import DetailHistory from "./component/History/DetailHistory";
import Chat from "./component/Chat";

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
        element: <History />,
      },
      {
        path: "chat",
        element: <Chat />,
      },
      {
        path: "history/detail-history",
        element: <DetailHistory />,
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
      <GObusAppBar />
      <Outlet />
      <GObusNavBar />
    </div>
  );
}

export default App;
