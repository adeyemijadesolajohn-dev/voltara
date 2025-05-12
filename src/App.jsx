import "./App.scss";
import Dashboard from "./DashboardMain/DashboardApp";
import Login from "./DashboardMain/Pages/Login/Login";
import Register from "./DashboardMain/Pages/Register/Register";
import LandingPage from "./DashboardMain/Pages/LandingPage/Landing";
import SelectDashboard from "./DashboardMain/Pages/SelectDashboard/SelectDashboard";
import CustomerRegistration from "./DashboardMain/Pages/CustomerRegistration/CustomerRegistration";
import { createBrowserRouter, RouterProvider } from "react-router";
import ElectricBill from "./DashboardMain/Pages/ElectricBill/ElectricBill";
import DebitSummary from "./DashboardMain/Pages/DebitSummary/DebitSummary";
import CreateAccount from "./DashboardMain/Components/CreateAccount/CreateAccount";
import Account from "./DashboardMain/Pages/Account/Account";
import BillPay from "./DashboardMain/Pages/BillPay/BillPay";
import Partner from "./DashboardMain/Pages/Partner/Partner";
import Analytics from "./DashboardMain/Pages/Analytics/Analytics";
import Meter from "./DashboardMain/Pages/Meter/Meter";

const router = createBrowserRouter([
  {
    path: "/Login",
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
    path: "/Dashboard/Account",
    element: (
      <div>
        <Account />
      </div>
    ),
  },
  {
    path: "/Dashboard/Billing",
    element: (
      <div>
        <BillPay />
      </div>
    ),
  },
  {
    path: "/Dashboard/Meter",
    element: (
      <div>
        <Meter />
      </div>
    ),
  },
  {
    path: "/Dashboard/Partner",
    element: (
      <div>
        <Partner />
      </div>
    ),
  },
  {
    path: "/Dashboard/Analytics",
    element: (
      <div>
        <Analytics />
      </div>
    ),
  },
  {
    path: "/",
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
