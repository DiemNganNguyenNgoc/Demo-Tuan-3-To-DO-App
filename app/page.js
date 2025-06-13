"use client";

import { useState } from "react";
import styles from "./page.module.css";
import InputTaskComponent from "@/component/InputTaskComponent/InputTaskComponent";
import TaskComponent from "@/component/TaskComponent/TaskComponent";

export default function Home() {
  // Nháp đang gõ
  const [draft, setDraft] = useState({ taskName: "", taskTime: "" });
  // Danh sách đã lưu
  const [tasks, setTasks] = useState([]);

  // Hàm khi click Submit
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!draft.taskName.trim()) return;       // Bỏ qua task trống   

    setTasks((prev) => [...prev, draft]);     // Thêm task vào danh sách
    setDraft({ taskName: "", taskTime: "" });  // Reset input
  };

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1 className={styles.title}>TO‑DO LIST </h1>

        <form onSubmit={handleSubmit} className={styles.form}>
          <InputTaskComponent draft={draft} setDraft={setDraft} />

          <button type="submit" className={styles.submitButton}>
            Submit
          </button>
        </form>
        <section className={styles.list}>
          {tasks.map((t, index) => (
            <TaskComponent
              key={index}
              taskName={t.taskName}
              taskTime={t.taskTime}
            />
          ))}
        </section>
      </main>
    </div>
  );
}
