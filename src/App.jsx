import "./App.scss";
import Dashboard from "./Dashboard/DashboardApp";
import Login from "./Components/Login/Login";
import Register from "./Components/Register/Register";
import LandingPage from "./Components/Landing Page/LandingPage";
import SelectDashboard from "./Components/Dashboard/Select Dashboard/SelectDashboard";
import CustomerRegistration from "./Components/Dashboard/Select Dashboard/CustomerRegistration/CustomerRegistration";
import { createBrowserRouter, RouterProvider } from "react-router";
import ElectricBill from "./Components/Dashboard/Select Dashboard/ElectricBill/ElectricBill";
import DebitSummary from "./Components/Dashboard/Select Dashboard/ElectricBill/DebitSummary";
import CreateAccount from "./Components/Dashboard/Select Dashboard/CreateAccount/CreateAccount";

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
    path: "/DebitSummary",
    element: (
      <div>
        <DebitSummary />
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
  {
    path: "/ElectricBill",
    element: (
      <div>
        <ElectricBill />
      </div>
    ),
  },
  {
    path: "/CreateAccount",
    element: (
      <div>
        <CreateAccount />
      </div>
    ),
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
