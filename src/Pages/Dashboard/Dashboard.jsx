import React from "react";
import { DashboardProvider } from "../../Contexts/Dashboard/DashboardContext";
import DashboardContent from "./DashboardContent";

export default function Dashboard() {
  return (
    <DashboardProvider>
      <DashboardContent />
    </DashboardProvider>
  );
}
