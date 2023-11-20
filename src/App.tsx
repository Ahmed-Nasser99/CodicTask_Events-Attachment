import React from "react";
import "./App.css";
import { createHashRouter, RouterProvider } from "react-router-dom";
import Layout from "./Components/Layout/Layout";
import DisplayEventsAndAttachments from "./Components/DisplayEventsAndAttachments/DisplayEventsAndAttachments";

function App() {
  let routes = createHashRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <DisplayEventsAndAttachments />,
        },
      ],
    },
  ]);
  return <RouterProvider router={routes} />;
}

export default App;
