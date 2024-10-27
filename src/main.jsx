import React from "react";
import ReactDom from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import About from "./Pages/About/About.jsx";
import Contact from "./Pages/Contact/Contact.jsx";
import Hero from "./Pages/Hero/Hero.jsx";
import Mywork from "./Pages/Mywork/Mywork.jsx";
import Service from "./Pages/Service/Service.jsx";

const router1 = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Hero />,
      },
      {
        path: "/Hero",
        element: <Hero />,
      },
      {
        path: "/About",
        element: <About />,
      },
      {
        path: "/Service",
        element: <Service />,
      },
      {
        path: "/Mywork",
        element: <Mywork />,
      },
      {
        path: "/Contact",
        element: <Contact />,
      },
    ],
  },
]);

ReactDom.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router1} />
  </React.StrictMode>
);
