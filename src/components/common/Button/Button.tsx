import React from "react";
import styles from "./Button.module.scss";
import { Button } from "@/Interface";

export default function Button({ btnClass, title, onClick }: Button) {
  return (
    <button onClick={onClick} className={`btn ${btnClass} ${styles.commonBtn}`}>
      {title}
    </button>
  );
}
