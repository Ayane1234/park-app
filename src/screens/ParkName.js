import React from "react";
import { Header } from "../components/Header";
import { Button } from "../components/Button";

export const ParkName = () => {
  return (
    <div style={styles.body}>
      <Header />
      <section style={styles.section}>
        <textarea style={styles.textarea} placeholder="公園名を入力"></textarea>
      </section>

      <Button style={styles.button} />
    </div>
  );
};

const styles = {
  body: {
    width: "100vw",
    height: "100vh",
    position: "relative",
    backgroundColor: "#f3eed5",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 30,
  },
  section: {
    width: "100%",
    height: "auto",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },

  textarea: {
    width: "80%",
    height: "10vh",
    border: "none",
    textAlign: "center",
    fontSize: "20px",
  },
};
