import "./App.scss";
import Dashboard from "./DashboardMain/DashboardApp";
import Login from "./Components/Login/Login";
import Register from "./Components/Register/Register";
import LandingPage from "./Components/Landing Page/LandingPage";
import SelectDashboard from "./Components/Dashboard/Select Dashboard/SelectDashboard";
import CustomerRegistration from "./Components/Dashboard/Select Dashboard/CustomerRegistration/CustomerRegistration";
import { createBrowserRouter, RouterProvider } from "react-router";
import ElectricBill from "./Components/Dashboard/Select Dashboard/ElectricBill/ElectricBill";
import DebitSummary from "./Components/Dashboard/Select Dashboard/ElectricBill/DebitSummary";
import CreateAccount from "./DashboardMain/Components/CreateAccount/CreateAccount";
import Account from "./DashboardMain/Pages/Account/Account";
import BillPay from "./DashboardMain/Pages/BillPay/BillPay";
import Partner from "./DashboardMain/Pages/Partner/Partner";
import Analytics from "./DashboardMain/Pages/Analytics/Analytics";
import Meter from "./DashboardMain/Pages/Meter/Meter";

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
