import React from "react";
import { IoRemoveSharp } from "react-icons/io5";
import { IoSquareOutline } from "react-icons/io5";
import { IoCloseSharp } from "react-icons/io5";
import { useFileExplorer } from "../../../Contexts/Dashboard/FileExplorerContext";

import styles from "./navbuttons.module.css";

export default function NavButtons() {
  const { toggleExplorer, toggleSizeExplorer } = useFileExplorer();

  return (
    <nav className={`navbar p-0 ${styles.appNavbar} rounded-top`}>
      <div className="ms-auto d-flex align-items-center">
        <IoRemoveSharp
          title="Minimizar"
          onClick={toggleExplorer}
          className={`${styles.btnMinimize} rounded m-1 p-1 `}
        />
        <IoSquareOutline
          title="Maximizar"
          onClick={toggleSizeExplorer}
          className={`${styles.btnMaximize} rounded m-1 p-1 `}
        />
        <IoCloseSharp
          title="Cerrar"
          onClick={toggleExplorer}
          className={`${styles.btnClose} rounded m-1 p-1 `}
        />
      </div>
    </nav>
  );
}
