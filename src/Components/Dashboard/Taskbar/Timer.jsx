import React, { useState, useEffect } from "react";
import styles from "./timer.module.css";

export default function Timer() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatDate = (date) => {
    return date.toLocaleDateString("es-ES", {
      weekday: "short",
      day: "numeric",
      month: "short",
    });
  };

  const formatTime = (date) => {
    return date.toLocaleTimeString("es-ES", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });
  };

  return (
    <div className={`d-flex flex-column float-end ${styles.clockContainer}`}>
      <div className={styles.dateText}>{formatDate(time)}</div>
      <div className={styles.timeText}>{formatTime(time)}</div>
    </div>
  );
}
