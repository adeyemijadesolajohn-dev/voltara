import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router";
import Content from "./Layout/Content/Content";
import Account from "./Layout/Account/Account";

const router = createBrowserRouter([
  {
    path: "/Dashboard/",
    element: (
      <div>
        <Content />
      </div>
    ),
  },
  {
    path: "/Dashboard/Account",
    element: (
      <div>
        <Account />
      </div>
    ),
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
