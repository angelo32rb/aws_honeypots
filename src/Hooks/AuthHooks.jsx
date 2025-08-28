import { useState, useEffect } from "react";
import { validateToken } from "../Services/Auth";

export function useTokenValidation() {
  const [isValid, setIsValid] = useState(null);
  const token = window.localStorage.getItem("token");
  useEffect(() => {
    if (!token) {
      setIsValid(false);
    }
    validateToken(token).then((result) => {
      setIsValid(result);
    });
  }, [token]);

  return isValid;
}
