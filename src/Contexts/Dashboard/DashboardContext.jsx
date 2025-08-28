import { createContext, useContext } from "react";
import { FileExplorerProvider } from "./FileExplorerContext";

const DashboardContext = createContext();

export function DashboardProvider({ children }) {
  return (
    <DashboardContext.Provider value={""}>
      <FileExplorerProvider>{children}</FileExplorerProvider>
    </DashboardContext.Provider>
  );
}

export function useDashboard() {
  return useContext(DashboardContext);
}
