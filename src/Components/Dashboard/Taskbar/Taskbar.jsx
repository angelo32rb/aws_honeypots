import React from "react";
import Timer from "./Timer";
import styles from "./taskbar.module.css";
import { RiBearSmileLine } from "react-icons/ri";
import { FaFolder } from "react-icons/fa";

export default function Taskbar({ onOpenExplorer }) {
  return (
    <nav className={`navbar fixed-bottom px-3 ${styles.taskbar}`}>
      <RiBearSmileLine
        className={` ${styles.logoImage} ${styles.logoContainer} ${styles.taskbarButton}`}
      />
      <div className="container d-flex justify-content-center align-items-center">
        <FaFolder
          className={`mx-4 ${styles.taskbarButton} ${styles.fileExplorerButton}`}
          onClick={onOpenExplorer}
          aria-label="Abrir explorador"
          size={24}
        />
      </div>
      <Timer />
    </nav>
  );
}
