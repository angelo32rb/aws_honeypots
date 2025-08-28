import React from "react";
import styles from "./fileexplorerform.module.css";

export default function FireExplorerForm() {
  return (
    <div
      className={`d-flex justify-content-center align-items-center ${styles.bgDark} ${styles.vt323} h-100`}
    >
      <div className={`p-4 rounded shadow-lg ${styles.formContainer}`}>
        <form className="text-start">
          <div className="mb-3">
            <label className="form-label">Nombre</label>
            <input
              type="text"
              className={`form-control ${styles.formInputs}`}
              placeholder="Escribe tu nombre"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Correo electrónico</label>
            <input
              type="email"
              className={`form-control ${styles.formInputs}`}
              placeholder="ejemplo@correo.com"
            />
          </div>
        </form>
      </div>
    </div>
  );
}
