"use client";

import React from "react";
import styles from "./TaskComponent.module.css"

export default function TaskComponent({ taskName, taskTime }) {

  // Hàm chuyển từ định dạng 24h sang 12h
  function to12h(timeStr) {
  if (!timeStr) return "";
  const [h, m] = timeStr.split(":").map(Number);
  const suffix = h >= 12 ? "PM" : "AM";
  const hour12 = ((h + 11) % 12) + 1; 
  return `${hour12}:${m.toString().padStart(2, "0")} ${suffix}`;
}

  return (
    <div >
      <input type="checkbox" className={styles.checkBox}/>
      <span className={styles.taskInList}>
        {taskName} {taskTime && `– ${to12h(taskTime)}`}
      </span>
    </div>
  );
}
