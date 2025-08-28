import { useAuth } from "../Contexts/Auth/AuthContext";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import OGAnimationLoading from "../Components/Animations/OGAnimationLoading";

export default function ProtectedRoute({ children }) {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (isAuthenticated === false) {
      window.localStorage.removeItem("token");
      navigate("/login", { replace: true });
    } else if (isAuthenticated === true) {
      setLoading(false);
    }
  }, [isAuthenticated, navigate]);

  if (isAuthenticated === null || loading) {
    return <OGAnimationLoading />;
  }

  return children;
}
