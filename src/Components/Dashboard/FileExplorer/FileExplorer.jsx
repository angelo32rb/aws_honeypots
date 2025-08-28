import React, { useState } from "react";
import { Rnd } from "react-rnd";
import Home from "./Home";
import { useFileExplorer } from "../../../Contexts/Dashboard/FileExplorerContext";
import FireExplorerForm from "./FileExplorerForm";
import NavButtons from "./NavButtons";

import styles from "./fileexplorer.module.css";

export default function FileExplorer() {
  const [activeView, setActiveView] = useState("home");
  const [position, setPosition] = useState({ x: 100, y: 100 });

  const renderContent = () => {
    switch (activeView) {
      case "home":
        return <Home />;
      case "form":
        return <FireExplorerForm />;
      default:
        return null;
    }
  };
  const { size, updateSize } = useFileExplorer();

  return (
    <Rnd
      size={size}
      position={position}
      onDragStop={(e, d) => {
        setPosition({ x: d.x, y: d.y });
      }}
      minWidth={500}
      minHeight={250}
      bounds="parent"
      onResizeStop={(e, direction, ref) => {
        updateSize({
          width: ref.style.width,
          height: ref.style.height,
        });
      }}
    >
      <div className={`w-100 h-100 shadow-lg ${styles.fileContainer}`}>
        <NavButtons />
        <div className={`d-flex w-100 h-100`}>
          <div
            className={`d-flex flex-column p-3 text-white w-25 ${styles.bgDark} ${styles.vt323}`}
          >
            <h5 className="text-light mb-3 display-5">Explorador</h5>
            <button
              className={`btn btn-sm  text-start ${
                activeView === "home" ? "btn-light" : "btn-outline-light"
              }`}
              onClick={() => setActiveView("home")}
            >
              Home
            </button>
            <button
              className={`btn btn-sm text-start ${
                activeView === "form" ? "btn-light" : "btn-outline-light"
              }`}
              onClick={() => setActiveView("form")}
            >
              Formulario
            </button>
          </div>

          <div
            className={`flex-grow-1 text-white w-100 overflow-auto py-3 ${styles.bgLightDark}`}
          >
            {renderContent()}
          </div>
        </div>
      </div>
    </Rnd>
  );
}
