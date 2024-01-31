import React from "react";
import holberton from "../assets/holberton-logo.jpg";
import { StyleSheet, css } from "aphrodite";

export default function Header() {
    return (
        <div className={css(styles["App-header"])}>
        <img src={holberton} alt="Holberton Logo" className={css(styles.img["App-header"])} />
        <h1>School dashboard</h1>
      </div>
    )
};
const styles = StyleSheet.create({
  "App-header": {
    fontSize: "1.4rem",
    color: "#e0354b",
    display: "flex",
    alignItems: "center",
    borderBottom: "3px solid #e0354b",
  },

  img: {
    width: "200px",
    height: "200px",
  },
});
