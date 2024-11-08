import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Home from "./assets/pages/Homepage.jsx";
import ErrorPage from "./assets/pages/ErrorPage.jsx";
import About from "./assets/pages/About.jsx";
import PageLogement from "./assets/components/PageLogement.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/Error",
    element: <ErrorPage />,
  },
  {
    path: "/About",
    element: <About />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/logement/:id",
    element: <PageLogement />,
    errorElement: <ErrorPage />,
  },
  {
    path: "*",
    Element: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
