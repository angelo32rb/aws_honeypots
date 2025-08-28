import React from "react";
import styles from "./oganimationloading.module.css";
import Logo from "../../assets/imgs/logo.svg";

export default function OGAnimationLoading() {
  return (
    <>
      <div
        className={`container-fluid ${styles.bgDark} vh-100 d-flex justify-content-center align-items-center z-2`}
      >
        <div className="row">
          <img
            src={Logo}
            alt="OG Logo"
            className={`img-fluid ${styles.fireEffect}`}
          />
        </div>
      </div>
    </>
  );
}
