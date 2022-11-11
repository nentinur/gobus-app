import React from "react";
import { GObusNavBar } from "./component/Navigation/GObusNavBar";
import { Outlet } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import { createBrowserRouter } from "react-router-dom";

import { HomePage } from "./page/HomePage";
import { BookingPage } from "./page/BookingPage";
import { History } from "./page/History";
import DetailHistory from "./component/History/DetailHistory";
import Chat from "./page/Chat";
import { FilterBus } from "./component/Booking/FilterBus";

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
      {
        path: "filter-bus",
        element: <FilterBus />,
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
