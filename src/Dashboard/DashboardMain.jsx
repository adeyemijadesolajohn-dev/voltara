import React from "react";
import ReactDOM from "react-dom/client";
import DashboardApp from "./DashboardApp";
import { SidebarProvider } from "./Context/sidebarContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <SidebarProvider>
      <DashboardApp />
    </SidebarProvider>
  </React.StrictMode>
);
