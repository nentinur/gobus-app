import { GObusAppBar } from "./component/GObusAppBar";
import { GObusNavBar } from "./component/GObusNavBar";
import { Beranda } from "./component/Home";
import Riwayat from "./component/Riwayat";
import RincianRiwayat from "./component/Riwayat/RincianRiwayat";
import Chat from "./component/Chat";
import { Outlet } from "react-router-dom";
import React from "react";
import { RouterProvider } from "react-router-dom";
import { createBrowserRouter } from "react-router-dom";

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
        element: <Beranda />,
      },
      {
        path: "riwayat",
        element: <Riwayat />,
      },
      {
        path: "chat",
        element: <Chat />,
      },
      {
        path: "riwayat/lacak-bus",
        element: <RincianRiwayat />,
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
