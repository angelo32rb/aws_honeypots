import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../../Services/Auth";
import { useAuth } from "../../Contexts/Auth/AuthContext";
import Alerts from "../Alerts/Alerts";

import styles from "./authform.module.css";
import Logo from "../../assets/imgs/logo.svg";

export default function AuthForm() {
  const navigate = useNavigate();
  const { setLogin } = useAuth();
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    login(user, password).then((result) => {
      if (result.status) {
        setLogin(result.accountInformation[0]);
        Alerts("success", "Has iniciado sesión.").then(() => {
          navigate("/", { replace: true });
        });
      } else {
        Alerts("error", "Usuario o contraseña incorrectos.");
      }
    });
  };

  return (
    <>
      <div
        className={`vh-100 overflow-hidden d-flex justify-content-center align-items-center ${styles.background} z-2`}
      >
        <div
          className={`position-relative p-5 rounded-2 shadow-lg w-25 ${styles.bgCard}`}
        >
          <div
            className="position-absolute top-0 start-50 translate-middle"
            style={{ zIndex: 2 }}
          >
            <img
              src={Logo}
              alt="Logo"
              className={`${styles.redGlow} ${styles.logo} img-fluid w-100`}
            />
          </div>
          <div className="mb-2 mt-3" />
          <form onSubmit={handleLogin}>
            <div className="mb-3">
              <label
                htmlFor="username"
                className={`${styles.vt323} form-label ${styles.fontDesign}`}
              >
                Usuario
              </label>
              <input
                type="text"
                className={`${styles.vt323} form-control ${styles.authInput}`}
                id="username"
                placeholder="user32"
                value={user}
                onChange={(e) => setUser(e.target.value)}
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="password"
                className={`${styles.vt323} form-label ${styles.fontDesign}`}
              >
                Contraseña
              </label>
              <input
                type="password"
                className={`${styles.vt323} form-control ${styles.authInput}`}
                id="password"
                placeholder="*********"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <input
              type="submit"
              className={`${styles.vt323} ${styles.btnLogin} w-100 p-2 mt-2`}
              value="Iniciar sesión"
            />
          </form>
        </div>
      </div>
    </>
  );
}
