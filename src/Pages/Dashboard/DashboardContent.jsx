import React from "react";
import { useFileExplorer } from "../../Contexts/Dashboard/FileExplorerContext";
import FileExplorer from "../../Components/Dashboard/FileExplorer/FileExplorer";
import Taskbar from "../../Components/Dashboard/Taskbar/Taskbar";

import styles from "./dashboard.module.css";

export default function DashboardContent() {
  const { toggleExplorer, showExplorer } = useFileExplorer();

  return (
    <>
      <div
        className={`vh-100 position-relative text-white overflow-hidden ${styles.bgWallpaper}`}
      >
        {showExplorer && <FileExplorer />}
        <Taskbar onOpenExplorer={toggleExplorer} />
      </div>
    </>
  );
}
