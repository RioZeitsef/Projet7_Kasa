import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Home from "./assets/pages/Homepage.jsx";
import ErrorPage from "./error-page.jsx";
import APropos from "./assets/pages/Apropos.jsx";
import PageLogement from "./assets/components/PageLogement.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/ErrorPage",
    element: <ErrorPage />,
  },
  {
    path: "/APropos",
    element: <APropos />,
  },
  {
    path: "/logement/:id",
    element: <PageLogement />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
