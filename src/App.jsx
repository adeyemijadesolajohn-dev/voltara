import "./App.scss";
import Dashboard from "./Components/Dashboard/Dashboard";
import Login from "./Components/Login/Login";
import Register from "./Components/Register/Register";
import LandingPage from "./Components/Landing Page/LandingPage";
import SelectDashboard from "./Components/Dashboard/Select Dashboard/SelectDashboard";
import CustomerRegistration from "./Components/Dashboard/Select Dashboard/CustomerRegistration/CustomerInformation";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <Login />
      </div>
    ),
  },
  {
    path: "/Register",
    element: (
      <div>
        <Register />
      </div>
    ),
  },
  {
    path: "/Dashboard",
    element: (
      <div>
        <Dashboard />
      </div>
    ),
  },
  {
    path: "/LandingPage",
    element: (
      <div>
        <LandingPage />
      </div>
    ),
  },
  {
    path: "/SelectDashboard",
    element: (
      <div>
        <SelectDashboard />
      </div>
    ),
  },
  {
    path: "/CustomerRegistration",
    element: (
      <div>
        <CustomerRegistration />
      </div>
    ),
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
