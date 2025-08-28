import { createContext, useContext, useState, useEffect } from "react";
import { useTokenValidation } from "../../Hooks/AuthHooks";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const isValid = useTokenValidation();
  const [isAuthenticated, setIsAuthenticated] = useState(null);
  const [accountInformation, setaccountInformation] = useState({});

  useEffect(() => {
    if (isValid !== null) {
      setIsAuthenticated(isValid);
    }
  }, [isValid]);

  function setLogin(accountInformation) {
    window.localStorage.setItem("token", accountInformation.token);
    setaccountInformation(accountInformation);
  }

  function logout() {
    window.localStorage.removeItem("token");
    setIsAuthenticated(false);
  }

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, setLogin, logout, accountInformation }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
