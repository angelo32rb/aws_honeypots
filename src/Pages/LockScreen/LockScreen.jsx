import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Stars from "../../Components/Animations/Stars";

import styles from "./lockscreen.module.css";
import Logo from "../../assets/imgs/logo.svg";

export default function LockScreen({ onUnlock }) {
  const navigate = useNavigate();

  const [currentDateTime, setCurrentDateTime] = useState(new Date());
  const y = useMotionValue(0);

  const opacity = useTransform(y, [-300, 0], [0.5, 1]);
  const blurValue = useTransform(y, [-300, 0], [8, 0]);
  const scale = useTransform(y, [-300, 0], [0.9, 1]);

  const filter = useTransform(blurValue, (value) => `blur(${value}px)`);
  const handleDragEnd = (event, info) => {
    if (info.offset.y < -150) {
      onUnlock();
    }
  };

  useEffect(() => {
    if (window.localStorage.getItem("token")) {
      navigate("/", { replace: true });
    }

    const intervals = [setInterval(() => setCurrentDateTime(new Date()), 1000)];

    return () => intervals.forEach(clearInterval);
  }, []);

  return (
    <motion.div
      className={`${styles.background} position-relative w-100 vh-100`}
      style={{
        y,
        opacity,
        filter,
        scale,
      }}
      drag="y"
      dragConstraints={{ top: -300, bottom: 0 }}
      dragElastic={0.2}
      onDragEnd={handleDragEnd}
    >
      <Stars />

      <div className="position-absolute top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center z-2">
        <img
          src={Logo}
          alt="OG Logo"
          className={`img-fluid ${styles.w45} ${styles.logo} ${styles.redGlow}`}
        />
      </div>

      <div
        className={`position-absolute bottom-0 end-0 pe-4 pb-4 text-white text-end z-3 ${styles.datetime}`}
      >
        <div className={`${styles.vt323} fs-1 opacity-90 mb-1`}>
          {currentDateTime.toLocaleDateString("es-ES")}
        </div>
        <div className={`${styles.vt323} display-2 fw-light opacity-90`}>
          {currentDateTime.toLocaleTimeString("es-ES", { hour12: false })}
        </div>
      </div>

      <motion.div
        className={`${styles.swipeHint} text-center w-100 ${styles.vt323} display-5`}
        animate={{ y: [0, -10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <p>↑ Desliza hacia arriba para desbloquear</p>
      </motion.div>
    </motion.div>
  );
}
