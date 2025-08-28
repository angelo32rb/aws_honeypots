import { createContext, useContext, useState, useEffect } from "react";

const FileExplorerContext = createContext();

export function FileExplorerProvider({ children }) {
  const [size, setSize] = useState();
  const [showExplorer, setShowExplorer] = useState(false);
  const [toggleSize, setToggleSize] = useState(false);

  useEffect(() => {
    if (toggleSize) {
      setSize({
        width: "100%",
        height: "100%",
      });
    } else {
      setSize({
        width: "50%",
        height: "50%",
      });
    }
  }, [toggleSize]);

  const toggleSizeExplorer = () => {
    setToggleSize((prev) => !prev);
  };

  const updateSize = (newSize) => {
    setSize(newSize);
  };

  const toggleExplorer = () => {
    setShowExplorer((prev) => !prev);
  };

  return (
    <FileExplorerContext.Provider
      value={{
        size,
        toggleSizeExplorer,
        showExplorer,
        toggleExplorer,
        updateSize,
      }}
    >
      {children}
    </FileExplorerContext.Provider>
  );
}

export function useFileExplorer() {
  return useContext(FileExplorerContext);
}
