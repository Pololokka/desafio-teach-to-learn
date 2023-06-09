import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import Home from "./Pages/Home/Index.jsx";
import Guide from "./Pages/Guide/Index.jsx";
import Paint from "./Pages/Paint/Index.jsx";
import Play from "./Pages/Play/Index.jsx";
import Mod from "./Pages/Mod/Index.jsx";
import ErrorPage from "./Pages/ErrorPage/Index.jsx";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/guia",
        element: <Guide />,
      },
      {
        path: "/pintar",
        element: <Paint />,
      },
      {
        path: "/jogar",
        element: <Play />,
      },
      {
        path: "/modificar",
        element: <Mod />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
