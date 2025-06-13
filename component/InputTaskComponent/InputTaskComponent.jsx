"use client";

import React from "react";
import styles from "./InputTaskComponent.module.css";

export default function InputTaskComponent({ draft, setDraft }) {
  return (
    <div >
      <input
        className={styles.inputTaskName}
        type="text"
        placeholder="What do you want to do?"
        value={draft.taskName}
        onChange={(e) =>
          setDraft((prev) => ({ ...prev, taskName: e.target.value }))
        }
      />

      <input
        className={styles.inputTaskTime}
        type="time"
        value={draft.taskTime}
        onChange={(e) =>
          setDraft((prev) => ({ ...prev, taskTime: e.target.value }))
        }
      />
    </div>
  );
}
